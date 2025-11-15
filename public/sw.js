// Service Worker for PWA capabilities with optimized caching
const CACHE_NAME = 'aladdin-cache-v3';
const STATIC_CACHE_NAME = 'aladdin-static-v3';
const DYNAMIC_CACHE_NAME = 'aladdin-dynamic-v3';
const OFFLINE_URL = '/offline.html';

// Optimized cache strategies - reduced durations for better freshness
const CACHE_STRATEGIES = {
  JS: { name: 'aladdin-static-v3', maxAge: 86400 }, // 1 day (reduced)
  CSS: { name: 'aladdin-static-v3', maxAge: 86400 }, // 1 day (reduced)
  IMAGE: { name: 'aladdin-static-v3', maxAge: 604800 }, // 1 week
  API: { name: 'aladdin-dynamic-v3', maxAge: 180 }, // 3 minutes (reduced for freshness)
  HTML: { name: 'aladdin-dynamic-v3', maxAge: 1800 } // 30 minutes (reduced)
};

// Minimal static cache for faster install
const STATIC_CACHE_URLS = [
  '/',
  '/manifest.json'
];

const DYNAMIC_CACHE_URLS = [
  '/search',
  '/my-announcements', 
  '/chat',
  '/create-announcement',
  '/favorites'
];

// Install event - cache static assets with better strategy
self.addEventListener('install', (event) => {
  console.log('[SW] Install event');
  
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME),
      caches.open(STATIC_CACHE_NAME),
      caches.open(DYNAMIC_CACHE_NAME)
    ])
      .then(([mainCache, staticCache, dynamicCache]) => {
        console.log('[SW] Caching static assets');
        return mainCache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static assets:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate event');
  const expectedCaches = [CACHE_NAME, STATIC_CACHE_NAME, DYNAMIC_CACHE_NAME];
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!expectedCaches.includes(cacheName)) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        return self.clients.claim();
      })
  );
});

// Optimized fetch strategy
function getCacheStrategy(request) {
  const url = new URL(request.url);
  
  // Assets with hash (JS/CSS bundled) - cache aggressively
  if (url.pathname.match(/\/assets\/.*\.(js|css)$/) || url.pathname.match(/-[a-zA-Z0-9]{8,}\.(js|css)$/)) {
    return { strategy: 'cache-first', cacheName: STATIC_CACHE_NAME };
  }

  // Images and fonts - cache first
  if (url.pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|eot)$/)) {
    return { strategy: 'cache-first', cacheName: STATIC_CACHE_NAME };
  }

  return { strategy: 'network-first', cacheName: DYNAMIC_CACHE_NAME };
}

// Fetch event - serve with optimized caching
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests except for known CDNs
  if (url.origin !== location.origin && !url.hostname.includes('unsplash.com')) {
    return;
  }

  // Skip chrome-extension requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  // Skip Vite dev server dependencies to prevent caching issues
  if (url.pathname.includes('/node_modules/.vite/')) {
    return;
  }

  const cacheConfig = getCacheStrategy(request);

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request)
            .then((cachedResponse) => {
              return cachedResponse || caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }

  // Handle API requests
  if (url.pathname.startsWith('/api/') || url.hostname.includes('supabase')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok && request.method === 'GET') {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }

  // Handle static assets with optimized caching
  if (cacheConfig.strategy === 'cache-first') {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(request)
            .then((response) => {
              if (response.ok && request.method === 'GET') {
                const responseClone = response.clone();
                caches.open(cacheConfig.cacheName)
                  .then((cache) => {
                    cache.put(request, responseClone);
                  });
              }
              return response;
            });
        })
    );
  } else {
    // Network first for other resources
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok && request.method === 'GET') {
            const responseClone = response.clone();
            caches.open(cacheConfig.cacheName)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
  }
});

// Push notification event
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');
  
  const options = {
    body: 'Vous avez reçu un nouveau message',
    icon: '/icon-192x192.png',
    badge: '/icon-96x96.png',
    vibrate: [200, 100, 200],
    data: {
      timestamp: Date.now(),
      url: '/chat'
    },
    actions: [
      {
        action: 'open',
        title: 'Ouvrir',
        icon: '/icon-96x96.png'
      },
      {
        action: 'close',
        title: 'Fermer',
        icon: '/icon-96x96.png'
      }
    ],
    requireInteraction: true,
    silent: false
  };

  if (event.data) {
    try {
      const payload = event.data.json();
      options.body = payload.body || options.body;
      options.data = { ...options.data, ...payload.data };
    } catch (error) {
      console.error('[SW] Error parsing push data:', error);
    }
  }

  event.waitUntil(
    self.registration.showNotification('Aladdin', options)
  );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked');
  
  event.notification.close();

  const targetUrl = event.notification.data?.url || '/';
  
  if (event.action === 'close') {
    return;
  }

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Check if app is already open
        for (const client of clientList) {
          if (client.url.includes(location.origin) && 'focus' in client) {
            client.focus();
            client.navigate(targetUrl);
            return;
          }
        }
        
        // Open new window
        if (clients.openWindow) {
          return clients.openWindow(targetUrl);
        }
      })
  );
});

console.log('[SW] Service Worker script loaded');