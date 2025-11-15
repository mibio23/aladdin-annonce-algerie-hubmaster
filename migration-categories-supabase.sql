-- ============================================
-- SCRIPT DE MIGRATION DES CATÉGORIES VERS SUPABASE
-- 5 LANGUES: FR, AR, EN, DE, ES
-- ============================================

-- 1. Nettoyer les données existantes
DELETE FROM category_translations;
DELETE FROM categories;

-- Réinitialiser les séquences
ALTER SEQUENCE categories_id_seq RESTART WITH 1;
ALTER SEQUENCE category_translations_id_seq RESTART WITH 1;

-- 2. Insérer les catégories principales
INSERT INTO categories (name, slug, icon, position_order, is_active) VALUES
('Électronique', 'electronique', 'Monitor', 1, true),
('Informatique', 'informatique', 'Laptop', 2, true),
('Téléphonie', 'telephonie', 'Smartphone', 3, true),
('Image & Son', 'image-son', 'Camera', 4, true),
('Consoles & Jeux Vidéo', 'consoles-jeux-video', 'Gamepad2', 5, true),
('Livres & Musique', 'livres-musique', 'Book', 6, true),
('Sports & Loisirs', 'sports-loisirs', 'Activity', 7, true),
('Mode & Beauté', 'mode-beaute', 'Shirt', 8, true),
('Maison & Jardin', 'maison-jardin', 'Home', 9, true),
('Électroménager', 'electromenager', 'Zap', 10, true),
('Ameublement', 'ameublement', 'Sofa', 11, true),
('Bricolage', 'bricolage', 'Hammer', 12, true),
('Véhicules', 'vehicules', 'Car', 13, true),
('Immobilier', 'immobilier', 'Building', 14, true),
('Emploi', 'emploi', 'Briefcase', 15, true),
('Services', 'services', 'Users', 16, true),
('Animaux', 'animaux', 'PawPrint', 17, true),
('Bébé & Enfant', 'bebe-enfant', 'Baby', 18, true),
('Art & Collection', 'art-collection', 'Palette', 19, true),
('Événements', 'evenements', 'Calendar', 20, true),
('Alimentation', 'alimentation', 'Utensils', 21, true),
('Voyages', 'voyages', 'Plane', 22, true),
('Autres', 'autres', 'Package', 23, true);

-- 3. Insérer les traductions FRANÇAISES
INSERT INTO category_translations (category_id, language_code, name, description, meta_title, meta_description) 
SELECT id, 'fr', name, 
  CASE name
    WHEN 'Électronique' THEN 'Appareils électroniques et gadgets'
    WHEN 'Informatique' THEN 'Ordinateurs, composants et accessoires'
    WHEN 'Téléphonie' THEN 'Smartphones, tablettes et accessoires'
    WHEN 'Image & Son' THEN 'Caméras, audio et vidéo'
    WHEN 'Consoles & Jeux Vidéo' THEN 'Consoles de jeux et jeux vidéo'
    WHEN 'Livres & Musique' THEN 'Livres, magazines et instruments de musique'
    WHEN 'Sports & Loisirs' THEN 'Équipements sportifs et loisirs'
    WHEN 'Mode & Beauté' THEN 'Vêtements, chaussures et produits de beauté'
    WHEN 'Maison & Jardin' THEN 'Décoration, meubles et jardinage'
    WHEN 'Électroménager' THEN 'Appareils électroménagers'
    WHEN 'Ameublement' THEN 'Meubles pour la maison'
    WHEN 'Bricolage' THEN 'Outils et matériaux de bricolage'
    WHEN 'Véhicules' THEN 'Voitures, motos et pièces détachées'
    WHEN 'Immobilier' THEN 'Locations et ventes immobilières'
    WHEN 'Emploi' THEN 'Offres d''emploi et recrutement'
    WHEN 'Services' THEN 'Services professionnels'
    WHEN 'Animaux' THEN 'Animaux de compagnie et accessoires'
    WHEN 'Bébé & Enfant' THEN 'Produits pour bébés et enfants'
    WHEN 'Art & Collection' THEN 'Œuvres d''art et objets de collection'
    WHEN 'Événements' THEN 'Billets et événements'
    WHEN 'Alimentation' THEN 'Produits alimentaires'
    WHEN 'Voyages' THEN 'Voyages et vacances'
    ELSE 'Autres catégories'
  END,
  name,
  CASE name
    WHEN 'Électronique' THEN 'Trouvez les meilleurs appareils électroniques'
    WHEN 'Informatique' THEN 'Ordinateurs et accessoires informatiques'
    WHEN 'Téléphonie' THEN 'Smartphones et tablettes au meilleur prix'
    ELSE 'Découvrez nos annonces'
  END
FROM categories;

-- 4. Insérer les traductions ARABES
INSERT INTO category_translations (category_id, language_code, name, description) 
SELECT id, 'ar',
  CASE name
    WHEN 'Électronique' THEN 'الإلكترونيات'
    WHEN 'Informatique' THEN 'المعلوماتية'
    WHEN 'Téléphonie' THEN 'الهواتف'
    WHEN 'Image & Son' THEN 'الصورة والصوت'
    WHEN 'Consoles & Jeux Vidéo' THEN 'أجهزة الألعاب'
    WHEN 'Livres & Musique' THEN 'الكتب والموسيقى'
    WHEN 'Sports & Loisirs' THEN 'الرياضة والترفيه'
    WHEN 'Mode & Beauté' THEN 'الموضة والجمال'
    WHEN 'Maison & Jardin' THEN 'المنزل والحديقة'
    WHEN 'Électroménager' THEN 'الأجهزة المنزلية'
    WHEN 'Ameublement' THEN 'الأثاث'
    WHEN 'Bricolage' THEN 'الأعمال اليدوية'
    WHEN 'Véhicules' THEN 'المركبات'
    WHEN 'Immobilier' THEN 'العقارات'
    WHEN 'Emploi' THEN 'التوظيف'
    WHEN 'Services' THEN 'الخدمات'
    WHEN 'Animaux' THEN 'الحيوانات'
    WHEN 'Bébé & Enfant' THEN 'الأطفال والرضع'
    WHEN 'Art & Collection' THEN 'الفن والمقتنيات'
    WHEN 'Événements' THEN 'الفعاليات'
    WHEN 'Alimentation' THEN 'المواد الغذائية'
    WHEN 'Voyages' THEN 'السفر'
    ELSE 'أخرى'
  END,
  CASE name
    WHEN 'Électronique' THEN 'الأجهزة الإلكترونية والأدوات'
    WHEN 'Informatique' THEN 'أجهزة الكمبيوتر والمكونات'
    WHEN 'Téléphonie' THEN 'الهواتف الذكية والأجهزة اللوحية'
    ELSE 'وصف الفئة'
  END
FROM categories;

-- 5. Insérer les traductions ANGLAISES
INSERT INTO category_translations (category_id, language_code, name, description) 
SELECT id, 'en',
  CASE name
    WHEN 'Électronique' THEN 'Electronics'
    WHEN 'Informatique' THEN 'Computing'
    WHEN 'Téléphonie' THEN 'Mobile Phones'
    WHEN 'Image & Son' THEN 'Image & Sound'
    WHEN 'Consoles & Jeux Vidéo' THEN 'Gaming Consoles'
    WHEN 'Livres & Musique' THEN 'Books & Music'
    WHEN 'Sports & Loisirs' THEN 'Sports & Leisure'
    WHEN 'Mode & Beauté' THEN 'Fashion & Beauty'
    WHEN 'Maison & Jardin' THEN 'Home & Garden'
    WHEN 'Électroménager' THEN 'Home Appliances'
    WHEN 'Ameublement' THEN 'Furniture'
    WHEN 'Bricolage' THEN 'DIY & Tools'
    WHEN 'Véhicules' THEN 'Vehicles'
    WHEN 'Immobilier' THEN 'Real Estate'
    WHEN 'Emploi' THEN 'Jobs'
    WHEN 'Services' THEN 'Services'
    WHEN 'Animaux' THEN 'Pets'
    WHEN 'Bébé & Enfant' THEN 'Baby & Kids'
    WHEN 'Art & Collection' THEN 'Art & Collectibles'
    WHEN 'Événements' THEN 'Events'
    WHEN 'Alimentation' THEN 'Food'
    WHEN 'Voyages' THEN 'Travel'
    ELSE 'Other'
  END,
  CASE name
    WHEN 'Électronique' THEN 'Electronic devices and gadgets'
    WHEN 'Informatique' THEN 'Computers, components and accessories'
    WHEN 'Téléphonie' THEN 'Smartphones, tablets and accessories'
    ELSE 'Category description'
  END
FROM categories;

-- 6. Insérer les traductions ALLEMANDES
INSERT INTO category_translations (category_id, language_code, name, description) 
SELECT id, 'de',
  CASE name
    WHEN 'Électronique' THEN 'Elektronik'
    WHEN 'Informatique' THEN 'Informatik'
    WHEN 'Téléphonie' THEN 'Mobiltelefone'
    WHEN 'Image & Son' THEN 'Bild & Ton'
    WHEN 'Consoles & Jeux Vidéo' THEN 'Spielkonsolen'
    WHEN 'Livres & Musique' THEN 'Bücher & Musik'
    WHEN 'Sports & Loisirs' THEN 'Sport & Freizeit'
    WHEN 'Mode & Beauté' THEN 'Mode & Schönheit'
    WHEN 'Maison & Jardin' THEN 'Haus & Garten'
    WHEN 'Électroménager' THEN 'Haushaltsgeräte'
    WHEN 'Ameublement' THEN 'Möbel'
    WHEN 'Bricolage' THEN 'Heimwerken'
    WHEN 'Véhicules' THEN 'Fahrzeuge'
    WHEN 'Immobilier' THEN 'Immobilien'
    WHEN 'Emploi' THEN 'Jobs'
    WHEN 'Services' THEN 'Dienstleistungen'
    WHEN 'Animaux' THEN 'Haustiere'
    WHEN 'Bébé & Enfant' THEN 'Baby & Kind'
    WHEN 'Art & Collection' THEN 'Kunst & Sammeln'
    WHEN 'Événements' THEN 'Veranstaltungen'
    WHEN 'Alimentation' THEN 'Lebensmittel'
    WHEN 'Voyages' THEN 'Reisen'
    ELSE 'Sonstiges'
  END,
  CASE name
    WHEN 'Électronique' THEN 'Elektronische Geräte und Gadgets'
    WHEN 'Informatique' THEN 'Computer, Komponenten und Zubehör'
    WHEN 'Téléphonie' THEN 'Smartphones, Tablets und Zubehör'
    ELSE 'Kategoriebeschreibung'
  END
FROM categories;

-- 7. Insérer les traductions ESPAGNOLES
INSERT INTO category_translations (category_id, language_code, name, description) 
SELECT id, 'es',
  CASE name
    WHEN 'Électronique' THEN 'Electrónica'
    WHEN 'Informatique' THEN 'Informática'
    WHEN 'Téléphonie' THEN 'Telefonía'
    WHEN 'Image & Son' THEN 'Imagen y Sonido'
    WHEN 'Consoles & Jeux Vidéo' THEN 'Consolas de Juegos'
    WHEN 'Livres & Musique' THEN 'Libros y Música'
    WHEN 'Sports & Loisirs' THEN 'Deportes y Ocio'
    WHEN 'Mode & Beauté' THEN 'Moda y Belleza'
    WHEN 'Maison & Jardin' THEN 'Casa y Jardín'
    WHEN 'Électroménager' THEN 'Electrodomésticos'
    WHEN 'Ameublement' THEN 'Muebles'
    WHEN 'Bricolage' THEN 'Bricolaje'
    WHEN 'Véhicules' THEN 'Vehículos'
    WHEN 'Immobilier' THEN 'Inmobiliaria'
    WHEN 'Emploi' THEN 'Empleo'
    WHEN 'Services' THEN 'Servicios'
    WHEN 'Animaux' THEN 'Mascotas'
    WHEN 'Bébé & Enfant' THEN 'Bebé y Niños'
    WHEN 'Art & Collection' THEN 'Arte y Colección'
    WHEN 'Événements' THEN 'Eventos'
    WHEN 'Alimentation' THEN 'Alimentación'
    WHEN 'Voyages' THEN 'Viajes'
    ELSE 'Otros'
  END,
  CASE name
    WHEN 'Électronique' THEN 'Dispositivos electrónicos y gadgets'
    WHEN 'Informatique' THEN 'Ordenadores, componentes y accesorios'
    WHEN 'Téléphonie' THEN 'Smartphones, tablets y accesorios'
    ELSE 'Descripción de categoría'
  END
FROM categories;

-- 8. Vérification finale
SELECT 
  'Categories' as table_name,
  COUNT(*) as total_count
FROM categories
UNION ALL
SELECT 
  'Translations' as table_name,
  COUNT(*) as total_count
FROM category_translations
UNION ALL
SELECT 
  CONCAT('Translations - ', language_code) as table_name,
  COUNT(*) as total_count
FROM category_translations
GROUP BY language_code
ORDER BY table_name;

-- Afficher un aperçu des données
SELECT 
  c.id,
  c.name as french_name,
  c.slug,
  c.icon,
  c.position_order,
  (SELECT COUNT(*) FROM category_translations ct WHERE ct.category_id = c.id) as translation_count
FROM categories c
ORDER BY c.position_order
LIMIT 10;
