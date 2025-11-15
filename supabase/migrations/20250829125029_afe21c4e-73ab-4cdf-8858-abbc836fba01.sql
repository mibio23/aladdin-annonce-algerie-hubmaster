-- Insertion d'annonces de test pour tester la recherche avancée

-- D'abord, vérifier et insérer des catégories si nécessaire
INSERT INTO public.categories (id, slug, translations, is_active, position_order) 
VALUES 
  (gen_random_uuid(), 'automobiles', '{"fr": {"name": "Automobiles", "description": "Voitures et véhicules"}, "ar": {"name": "سيارات", "description": "سيارات ومركبات"}}', true, 1),
  (gen_random_uuid(), 'immobilier', '{"fr": {"name": "Immobilier", "description": "Biens immobiliers"}, "ar": {"name": "عقارات", "description": "عقارات ومنازل"}}', true, 2),
  (gen_random_uuid(), 'electromenager', '{"fr": {"name": "Électroménager", "description": "Appareils électroménagers"}, "ar": {"name": "أجهزة منزلية", "description": "أجهزة كهربائية منزلية"}}', true, 3)
ON CONFLICT (slug) DO NOTHING;

-- Insérer des annonces de test
WITH category_ids AS (
  SELECT id, slug FROM categories WHERE slug IN ('automobiles', 'immobilier', 'electromenager')
)
INSERT INTO public.announcements (
  id, 
  user_id, 
  category_id, 
  title, 
  description, 
  price, 
  location, 
  phone_number, 
  type, 
  condition, 
  status, 
  shop_name,
  created_at
) 
SELECT 
  gen_random_uuid(),
  gen_random_uuid(), -- user_id fictif
  cat.id,
  data.title,
  data.description,
  data.price,
  data.location,
  data.phone,
  data.type,
  data.condition,
  'active',
  data.shop_name,
  now() - (data.days_ago || ' days')::interval
FROM category_ids cat
CROSS JOIN (
  VALUES 
    -- Automobiles
    ('automobiles', 'Renault Clio 2018', 'Voiture en excellent état, entretenue régulièrement. Climatisation, GPS intégré.', 85000, 'Casablanca', '0612345678', 'sell', 'excellent', 'Auto Plus', 1),
    ('automobiles', 'Peugeot 208 2020', 'Citadine économique, parfaite pour la ville. Très peu de kilométrage.', 120000, 'Rabat', '0623456789', 'sell', 'comme_neuf', 'Motors City', 2),
    ('automobiles', 'Toyota Yaris 2017', 'Véhicule fiable, idéal premier achat. Révisée récemment.', 75000, 'Marrakech', '0634567890', 'sell', 'bon', 'Garage Central', 3),
    
    -- Immobilier  
    ('immobilier', 'Appartement 3 chambres Agdal', 'Bel appartement moderne avec terrasse, proche commodités. Vue dégagée.', 1200000, 'Rabat', '0645678901', 'sell', 'excellent', 'Immobilier Premium', 1),
    ('immobilier', 'Villa avec jardin Californie', 'Magnifique villa familiale avec piscine et grand jardin arboré.', 3500000, 'Casablanca', '0656789012', 'sell', 'excellent', 'Luxe Properties', 4),
    ('immobilier', 'Studio meublé Gueliz', 'Studio tout équipé en centre-ville, idéal étudiant ou jeune actif.', 350000, 'Marrakech', '0667890123', 'rent', 'bon', 'Location Express', 2),
    
    -- Électroménager
    ('electromenager', 'Réfrigérateur Samsung 400L', 'Réfrigérateur double porte, très économique. Garantie encore valable.', 4500, 'Casablanca', '0678901234', 'sell', 'comme_neuf', 'Électro Shop', 1),
    ('electromenager', 'Machine à laver LG 7kg', 'Lave-linge automatique, programmes multiples. Fonctionne parfaitement.', 2800, 'Fès', '0689012345', 'sell', 'bon', 'Ménager Plus', 3),
    ('electromenager', 'Micro-ondes Moulinex', 'Four micro-ondes avec grill, très pratique. État impeccable.', 800, 'Agadir', '0690123456', 'sell', 'excellent', 'Cuisine Pro', 2)
) AS data(cat_slug, title, description, price, location, phone, type, condition, shop_name, days_ago)
WHERE cat.slug = data.cat_slug;