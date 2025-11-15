// Utilitaires pour éviter les erreurs de sérialisation cyclique

export function safeStringify(obj: any, indent: number = 2): string {
  const cache = new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        return '[Circular Reference]';
      }
      cache.add(value);
    }
    return value;
  }, indent);
}

export function safeLog(description: string, obj: any): void {
  try {
    console.log(description);
    if (typeof obj === 'object' && obj !== null) {
      const safeObj: any = {};
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (typeof value !== 'function' && typeof value !== 'object' || value === null) {
          safeObj[key] = value;
        } else if (Array.isArray(value)) {
          safeObj[key] = value.length;
        } else {
          safeObj[key] = '[Object]';
        }
      });
      console.log(safeObj);
    } else {
      console.log(obj);
    }
  } catch (error) {
    console.log(`  ❌ Erreur de log: ${(error as Error).message}`);
  }
}

export function safeJSONParse<T>(str: string, fallback?: T): T | null {
  try {
    return JSON.parse(str);
  } catch (error) {
    console.warn('Erreur de parsing JSON:', error);
    return fallback || null;
  }
}
