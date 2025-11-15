import fs from 'fs';
import path from 'path';

console.log('👶 CRÉATION DE LA CATÉGORIE "Puériculture & Équipement Bébé"');
console.log('================================================================================');

// Structure complète de la catégorie avec traductions multilingues
const puericultureEquipementBebeCategory = {
  id: 'puericulture-equipement-bebe',
  name: 'Puériculture & Équipement Bébé',
  slug: 'puericulture-equipement-bebe',
  icon: undefined,
  translations: {
    "fr": "Puériculture & Équipement Bébé",
    "ar": "تربية الخنازير ومعدات الأطفال",
    "en": "Poultry Farming & Baby Equipment",
    "de": "Geflügelzucht & Babyausrüstung",
    "es": "Avicultura y Equipamiento para Bebés"
  },
  subcategories: [
    {
      id: 'equipements-puericulture',
      name: 'Équipements de Puériculture',
      slug: 'equipements-puericulture',
      icon: undefined,
      translations: {
        "fr": "Équipements de Puériculture",
        "ar": "معدات تربية الخنازير",
        "en": "Poultry Farming Equipment",
        "de": "Geflügelzuchtausrüstung",
        "es": "Equipos de Avicultura"
      },
      subcategories: [
        {
          id: 'pousettes-systemes-portage',
          name: 'Poussettes et Systèmes de Portage',
          slug: 'pousettes-systemes-portage',
          icon: undefined,
          translations: {
            "fr": "Poussettes et Systèmes de Portage",
            "ar": "حمالات الأطفال وأنظمة الحمل",
            "en": "Baby Carriers and Wearing Systems",
            "de": "Babytragen und Tragesysteme",
            "es": "Portabebés y Sistemas de Porteo"
          },
          subcategories: []
        },
        {
          id: 'sieges-auto-transports',
          name: 'Sièges Auto et Transports',
          slug: 'sieges-auto-transports',
          icon: undefined,
          translations: {
            "fr": "Sièges Auto et Transports",
            "ar": "مقاعد السيارات والنقل",
            "en": "Car Seats and Transport",
            "de": "Autositze und Transport",
            "es": "Sillas de Coche y Transporte"
          },
          subcategories: []
        },
        {
          id: 'accessoires-puericulture',
          name: 'Accessoires de Puériculture',
          slug: 'accessoires-puericulture',
          icon: undefined,
          translations: {
            "fr": "Accessoires de Puériculture",
            "ar": "ملحقات تربية الخنازير",
            "en": "Poultry Farming Accessories",
            "de": "Geflügelzuchtzubehör",
            "es": "Accesorios de Avicultura"
          },
          subcategories: []
        },
        {
          id: 'equipements-sortie',
          name: 'Équipements de Sortie',
          slug: 'equipements-sortie',
          icon: undefined,
          translations: {
            "fr": "Équipements de Sortie",
            "ar": "معدات الخروج",
            "en": "Outdoor Equipment",
            "de": "Outdoorausrüstung",
            "es": "Equipos de Salida"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'vetements-bebe',
      name: 'Vêtements Bébé',
      slug: 'vetements-bebe',
      icon: undefined,
      translations: {
        "fr": "Vêtements Bébé",
        "ar": "ملابس الأطفال",
        "en": "Baby Clothes",
        "de": "Babykleidung",
        "es": "Ropa de Bebé"
      },
      subcategories: [
        {
          id: 'vetements-nuit',
          name: 'Vêtements de Nuit',
          slug: 'vetements-nuit',
          icon: undefined,
          translations: {
            "fr": "Vêtements de Nuit",
            "ar": "ملابس النوم",
            "en": "Night Clothes",
            "de": "Nachtkleidung",
            "es": "Ropa de Noche"
          },
          subcategories: []
        },
        {
          id: 'vetements-jour',
          name: 'Vêtements de Jour',
          slug: 'vetements-jour',
          icon: undefined,
          translations: {
            "fr": "Vêtements de Jour",
            "ar": "ملابس النهار",
            "en": "Day Clothes",
            "de": "Tageskleidung",
            "es": "Ropa de Día"
          },
          subcategories: []
        },
        {
          id: 'vetements-exterieur',
          name: 'Vêtements d\'Extérieur',
          slug: 'vetements-exterieur',
          icon: undefined,
          translations: {
            "fr": "Vêtements d'Extérieur",
            "ar": "ملابس الخارج",
            "en": "Outdoor Clothes",
            "de": "Outdoor-Kleidung",
            "es": "Ropa de Exterior"
          },
          subcategories: []
        },
        {
          id: 'sous-vetements',
          name: 'Sous-vêtements',
          slug: 'sous-vetements',
          icon: undefined,
          translations: {
            "fr": "Sous-vêtements",
            "ar": "ملابس داخلية",
            "en": "Underwear",
            "de": "Unterwäsche",
            "es": "Ropa Interior"
          },
          subcategories: []
        },
        {
          id: 'accessoires-vestimentaires',
          name: 'Accessoires Vestimentaires',
          slug: 'accessoires-vestimentaires',
          icon: undefined,
          translations: {
            "fr": "Accessoires Vestimentaires",
            "ar": "إكسسوارات الملابس",
            "en": "Clothing Accessories",
            "de": "Kleidungszubehör",
            "es": "Accesorios de Ropa"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'equipements-allaitement',
      name: 'Équipements d\'Allaitement',
      slug: 'equipements-allaitement',
      icon: undefined,
      translations: {
        "fr": "Équipements d'Allaitement",
        "ar": "معدات الرضاعة",
        "en": "Breastfeeding Equipment",
        "de": "Stillausrüstung",
        "es": "Equipos de Lactancia"
      },
      subcategories: [
        {
          id: 'tire-lait-coussinets-allaitement',
          name: 'Tire-lait et Coussinets d\'Allaitement',
          slug: 'tire-lait-coussinets-allaitement',
          icon: undefined,
          translations: {
            "fr": "Tire-lait et Coussinets d'Allaitement",
            "ar": "مضخات الحليب ووسائد الرضاعة",
            "en": "Breast Pumps and Nursing Pads",
            "de": "Milchpumpen und Stillkissen",
            "es": "Sacalechos y Almohadillas de Lactancia"
          },
          subcategories: []
        },
        {
          id: 'biberons-tetines',
          name: 'Biberons et Tétines',
          slug: 'biberons-tetines',
          icon: undefined,
          translations: {
            "fr": "Biberons et Tétines",
            "ar": "زجاجات الحليب وحلمات",
            "en": "Baby Bottles and Teats",
            "de": "Babyflaschen und Sauger",
            "es": "Biberones y Tetinas"
          },
          subcategories: []
        },
        {
          id: 'sterilisateurs-chauffe-biberons',
          name: 'Stérilisateurs et Chauffe-biberons',
          slug: 'sterilisateurs-chauffe-biberons',
          icon: undefined,
          translations: {
            "fr": "Stérilisateurs et Chauffe-biberons",
            "ar": "معقمات ومسخنات الزجاجات",
            "en": "Sterilizers and Bottle Warmers",
            "de": "Sterilisatoren und Flaschenwärmer",
            "es": "Esterilizadores y Calentadores de Biberones"
          },
          subcategories: []
        },
        {
          id: 'sac-langer-accessoires',
          name: 'Sac à Langer et Accessoires',
          slug: 'sac-langer-accessoires',
          icon: undefined,
          translations: {
            "fr": "Sac à Langer et Accessoires",
            "ar": "حقائب تغيير الحفاضات وإكسسوارات",
            "en": "Diaper Bags and Accessories",
            "de": "Windeltaschen und Zubehör",
            "es": "Bolsas de Pañales y Accesorios"
          },
          subcategories: []
        },
        {
          id: 'produits-allaitement',
          name: 'Produits d\'Allaitement',
          slug: 'produits-allaitement',
          icon: undefined,
          translations: {
            "fr": "Produits d'Allaitement",
            "ar": "منتجات الرضاعة",
            "en": "Breastfeeding Products",
            "de": "Stillprodukte",
            "es": "Productos de Lactancia"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'lits-chambres-bebe',
      name: 'Lits et Chambres Bébé',
      slug: 'lits-chambres-bebe',
      icon: undefined,
      translations: {
        "fr": "Lits et Chambres Bébé",
        "ar": "أسرة وغرف الأطفال",
        "en": "Baby Beds and Rooms",
        "de": "Babybetten und Kinderzimmer",
        "es": "Cunas y Habitaciones de Bebé"
      },
      subcategories: [
        {
          id: 'lits-bebe',
          name: 'Lits Bébé',
          slug: 'lits-bebe',
          icon: undefined,
          translations: {
            "fr": "Lits Bébé",
            "ar": "أسرة الأطفال",
            "en": "Baby Beds",
            "de": "Babybetten",
            "es": "Cunas de Bebé"
          },
          subcategories: []
        },
        {
          id: 'berceaux-moises',
          name: 'Berceaux et Moïses',
          slug: 'berceaux-moises',
          icon: undefined,
          translations: {
            "fr": "Berceaux et Moïses",
            "ar": "مهود وأسرّة",
            "en": "Cribs and Moses Baskets",
            "de": "Wiegen und Wiegenkörbe",
            "es": "Cunas y Cestas de Moisés"
          },
          subcategories: []
        },
        {
          id: 'matelas-langer',
          name: 'Matelas à Langer',
          slug: 'matelas-langer',
          icon: undefined,
          translations: {
            "fr": "Matelas à Langer",
            "ar": "مراتب تغيير الحفاضات",
            "en": "Changing Mats",
            "de": "Wickelmatten",
            "es": "Colchonones de Cambio"
          },
          subcategories: []
        },
        {
          id: 'mobilier-chambre-bebe',
          name: 'Mobilier de Chambre Bébé',
          slug: 'mobilier-chambre-bebe',
          icon: undefined,
          translations: {
            "fr": "Mobilier de Chambre Bébé",
            "ar": "أثاث غرف الأطفال",
            "en": "Baby Room Furniture",
            "de": "Kinderzimmermöbel",
            "es": "Muebles de Habitación de Bebé"
          },
          subcategories: []
        },
        {
          id: 'decoration-chambre-bebe',
          name: 'Décoration de Chambre Bébé',
          slug: 'decoration-chambre-bebe',
          icon: undefined,
          translations: {
            "fr": "Décoration de Chambre Bébé",
            "ar": "ديكور غرف الأطفال",
            "en": "Baby Room Decoration",
            "de": "Kinderzimmerdekoration",
            "es": "Decoración de Habitación de Bebé"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'transports-deplacements-bebe',
      name: 'Transports et Déplacements Bébé',
      slug: 'transports-deplacements-bebe',
      icon: undefined,
      translations: {
        "fr": "Transports et Déplacements Bébé",
        "ar": "النقل والتنقل للأطفال",
        "en": "Baby Transport and Mobility",
        "de": "Babytransport und Mobilität",
        "es": "Transporte y Movilidad para Bebés"
      },
      subcategories: [
        {
          id: 'pousettes-landaus',
          name: 'Poussettes et Landaus',
          slug: 'pousettes-landaus',
          icon: undefined,
          translations: {
            "fr": "Poussettes et Landaus",
            "ar": "حمالات الأطفال وعربات",
            "en": "Baby Carriers and Strollers",
            "de": "Babytragen und Kinderwagen",
            "es": "Portabebés y Cochecitos"
          },
          subcategories: []
        },
        {
          id: 'sieges-auto',
          name: 'Sièges Auto',
          slug: 'sieges-auto',
          icon: undefined,
          translations: {
            "fr": "Sièges Auto",
            "ar": "مقاعد السيارات",
            "en": "Car Seats",
            "de": "Autositze",
            "es": "Sillas de Coche"
          },
          subcategories: []
        },
        {
          id: 'transpots-sacs-dos',
          name: 'Transpôts et Sacs à Dos',
          slug: 'transpots-sacs-dos',
          icon: undefined,
          translations: {
            "fr": "Transpôts et Sacs à Dos",
            "ar": "حقائب الظهر وحمالات الظهر",
            "en": "Backpack Carriers and Baby Backpacks",
            "de": "Rucksackträger und Babyrucksäcke",
            "es": "Portabebés de Espalda y Mochilas"
          },
          subcategories: []
        },
        {
          id: 'accessoires-transport',
          name: 'Accessoires de Transport',
          slug: 'accessoires-transport',
          icon: undefined,
          translations: {
            "fr": "Accessoires de Transport",
            "ar": "إكسسوارات النقل",
            "en": "Transport Accessories",
            "de": "Transportzubehör",
            "es": "Accesorios de Transporte"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'jouets-activites-bebe',
      name: 'Jouets et Activités Bébé',
      slug: 'jouets-activites-bebe',
      icon: undefined,
      translations: {
        "fr": "Jouets et Activités Bébé",
        "ar": "ألعاب وأنشطة الأطفال",
        "en": "Baby Toys and Activities",
        "de": "Babyspielzeug und Aktivitäten",
        "es": "Juguetes y Actividades para Bebés"
      },
      subcategories: [
        {
          id: 'jouets-eveil',
          name: 'Jouets d\'Éveil',
          slug: 'jouets-eveil',
          icon: undefined,
          translations: {
            "fr": "Jouets d'Éveil",
            "ar": "ألعاب التنمية",
            "en": "Developmental Toys",
            "de": "Entwicklungsspielzeug",
            "es": "Juguetes de Desarrollo"
          },
          subcategories: []
        },
        {
          id: 'jouets-eveil-musical',
          name: 'Jouets d\'Éveil Musical',
          slug: 'jouets-eveil-musical',
          icon: undefined,
          translations: {
            "fr": "Jouets d'Éveil Musical",
            "ar": "ألعاب تنمية موسيقية",
            "en": "Musical Developmental Toys",
            "de": "Musikalisches Entwicklungsspielzeug",
            "es": "Juguetes Musicales de Desarrollo"
          },
          subcategories: []
        },
        {
          id: 'livres-contes',
          name: 'Livres et Contes',
          slug: 'livres-contes',
          icon: undefined,
          translations: {
            "fr": "Livres et Contes",
            "ar": "كتب وقصص",
            "en": "Books and Stories",
            "de": "Bücher und Geschichten",
            "es": "Libros y Cuentos"
          },
          subcategories: []
        },
        {
          id: 'tapis-eveil-jeux-sol',
          name: 'Tapis d\'Éveil et Jeux de Sol',
          slug: 'tapis-eveil-jeux-sol',
          icon: undefined,
          translations: {
            "fr": "Tapis d'Éveil et Jeux de Sol",
            "ar": "سجاد تنمية وألعاب أرضية",
            "en": "Play Mats and Floor Games",
            "de": "Spielteppiche und Bodenspiele",
            "es": "Alfombras de Estimulación y Juegos de Suelo"
          },
          subcategories: []
        },
        {
          id: 'activites-motricite',
          name: 'Activités de Motricité',
          slug: 'activites-motricite',
          icon: undefined,
          translations: {
            "fr": "Activités de Motricité",
            "ar": "أنشطة الحركة",
            "en": "Motor Skills Activities",
            "de": "Motorikaktivitäten",
            "es": "Actividades de Motricidad"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'hygiene-soins-bebe',
      name: 'Hygiène et Soins Bébé',
      slug: 'hygiene-soins-bebe',
      icon: undefined,
      translations: {
        "fr": "Hygiène et Soins Bébé",
        "ar": "نظافة ورعاية الأطفال",
        "en": "Baby Hygiene and Care",
        "de": "Babyhygiene und Pflege",
        "es": "Higiene y Cuidado del Bebé"
      },
      subcategories: [
        {
          id: 'couches-changes',
          name: 'Couches et Changes',
          slug: 'couches-changes',
          icon: undefined,
          translations: {
            "fr": "Couches et Changes",
            "ar": "حفاضات وتغيير الحفاضات",
            "en": "Diapers and Changing Supplies",
            "de": "Windeln und Wickelzubehör",
            "es": "Pañales y Suministros de Cambio"
          },
          subcategories: []
        },
        {
          id: 'produits-toilette-bain',
          name: 'Produits de Toilette et de Bain',
          slug: 'produits-toilette-bain',
          icon: undefined,
          translations: {
            "fr": "Produits de Toilette et de Bain",
            "ar": "منتجات النظافة والاستحمام",
            "en": "Toilet and Bath Products",
            "de": "Toiletten- und Badeprodukte",
            "es": "Productos de Aseo y Baño"
          },
          subcategories: []
        },
        {
          id: 'soins-peau',
          name: 'Soins de la Peau',
          slug: 'soins-peau',
          icon: undefined,
          translations: {
            "fr": "Soins de la Peau",
            "ar": "العناية بالبشرة",
            "en": "Skin Care",
            "de": "Hautpflege",
            "es": "Cuidado de la Piel"
          },
          subcategories: []
        },
        {
          id: 'thermometres-moniteurs',
          name: 'Thermomètres et Moniteurs',
          slug: 'thermometres-moniteurs',
          icon: undefined,
          translations: {
            "fr": "Thermomètres et Moniteurs",
            "ar": "مقاييس الحرارة وشاشات المراقبة",
            "en": "Thermometers and Monitors",
            "de": "Thermometer und Monitore",
            "es": "Termómetros y Monitores"
          },
          subcategories: []
        },
        {
          id: 'produits-hygiene',
          name: 'Produits d\'Hygiène',
          slug: 'produits-hygiene',
          icon: undefined,
          translations: {
            "fr": "Produits d'Hygiène",
            "ar": "منتجات النظافة",
            "en": "Hygiene Products",
            "de": "Hygieneprodukte",
            "es": "Productos de Higiene"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'securite-surveillance-bebe',
      name: 'Sécurité et Surveillance Bébé',
      slug: 'securite-surveillance-bebe',
      icon: undefined,
      translations: {
        "fr": "Sécurité et Surveillance Bébé",
        "ar": "الأمان والمراقبة للأطفال",
        "en": "Baby Safety and Monitoring",
        "de": "Babysicherheit und Überwachung",
        "es": "Seguridad y Vigilancia para Bebés"
      },
      subcategories: [
        {
          id: 'barrieres-securite',
          name: 'Barrières de Sécurité',
          slug: 'barrieres-securite',
          icon: undefined,
          translations: {
            "fr": "Barrières de Sécurité",
            "ar": "حواجز الأمان",
            "en": "Safety Barriers",
            "de": "Sicherheitsbarrieren",
            "es": "Barreras de Seguridad"
          },
          subcategories: []
        },
        {
          id: 'moniteurs-bebe',
          name: 'Moniteurs Bébé',
          slug: 'moniteurs-bebe',
          icon: undefined,
          translations: {
            "fr": "Moniteurs Bébé",
            "ar": "شاشات مراقبة الأطفال",
            "en": "Baby Monitors",
            "de": "Babyfon",
            "es": "Monitores para Bebés"
          },
          subcategories: []
        },
        {
          id: 'detecteurs-mouvement',
          name: 'Détecteurs de Mouvement',
          slug: 'detecteurs-mouvement',
          icon: undefined,
          translations: {
            "fr": "Détecteurs de Mouvement",
            "ar": "كواشف الحركة",
            "en": "Motion Detectors",
            "de": "Bewegungsmelder",
            "es": "Detectores de Movimiento"
          },
          subcategories: []
        },
        {
          id: 'proteges-angles-securite',
          name: 'Protège-angles et Sécurité',
          slug: 'proteges-angles-securite',
          icon: undefined,
          translations: {
            "fr": "Protège-angles et Sécurité",
            "ar": "واقيات الزوايا والأمان",
            "en": "Corner Guards and Safety",
            "de": "Eckschoner und Sicherheit",
            "es": "Protectores de Esquinas y Seguridad"
          },
          subcategories: []
        },
        {
          id: 'accessoires-securite',
          name: 'Accessoires de Sécurité',
          slug: 'accessoires-securite',
          icon: undefined,
          translations: {
            "fr": "Accessoires de Sécurité",
            "ar": "إكسسوارات الأمان",
            "en": "Safety Accessories",
            "de": "Sicherheitszubehör",
            "es": "Accesorios de Seguridad"
          },
          subcategories: []
        }
      ]
    },
    {
      id: 'accessoires-produits-bebe',
      name: 'Accessoires et Produits Bébé',
      slug: 'accessoires-produits-bebe',
      icon: undefined,
      translations: {
        "fr": "Accessoires et Produits Bébé",
        "ar": "إكسسوارات ومنتجات الأطفال",
        "en": "Baby Accessories and Products",
        "de": "Babyzubehör und Produkte",
        "es": "Accesorios y Productos para Bebés"
      },
      subcategories: [
        {
          id: 'bourses-sacs-langer',
          name: 'Bourses et Sacs à Langer',
          slug: 'bourses-sacs-langer',
          icon: undefined,
          translations: {
            "fr": "Bourses et Sacs à Langer",
            "ar": "حقائب تغيير الحفاضات",
            "en": "Diaper Bags and Changing Bags",
            "de": "Windeltaschen und Wickeltaschen",
            "es": "Bolsas de Pañales y Bolsas de Cambio"
          },
          subcategories: []
        },
        {
          id: 'couvertures-gigoteuses',
          name: 'Couvertures et Gigoteuses',
          slug: 'couvertures-gigoteuses',
          icon: undefined,
          translations: {
            "fr": "Couvertures et Gigoteuses",
            "ar": "بطانيات وأغطية",
            "en": "Blankets and Swaddles",
            "de": "Decken und Wickeldecken",
            "es": "Mantas y Fajas"
          },
          subcategories: []
        },
        {
          id: 'produits-diversification',
          name: 'Produits de Diversification',
          slug: 'produits-diversification',
          icon: undefined,
          translations: {
            "fr": "Produits de Diversification",
            "ar": "منتجات التنويع",
            "en": "Weaning Products",
            "de": "Beikostprodukte",
            "es": "Productos de Diversificación"
          },
          subcategories: []
        },
        {
          id: 'cadeaux-naissance',
          name: 'Cadeaux de Naissance',
          slug: 'cadeaux-naissance',
          icon: undefined,
          translations: {
            "fr": "Cadeaux de Naissance",
            "ar": "هدايا الميلاد",
            "en": "Birth Gifts",
            "de": "Geburtsgeschenke",
            "es": "Regalos de Nacimiento"
          },
          subcategories: []
        },
        {
          id: 'produits-specialises',
          name: 'Produits Spécialisés',
          slug: 'produits-specialises',
          icon: undefined,
          translations: {
            "fr": "Produits Spécialisés",
            "ar": "منتجات متخصصة",
            "en": "Specialized Products",
            "de": "Spezialisierte Produkte",
            "es": "Productos Especializados"
          },
          subcategories: []
        }
      ]
    }
  ]
};

// Conversion en format TypeScript
function convertToTypeScript(category) {
  let tsString = `  {
    id: '${category.id}',
    name: '${category.name}',
    slug: '${category.slug}',
    icon: undefined,
    translations: {
      "fr": "${category.translations.fr}",
      "ar": "${category.translations.ar}",
      "en": "${category.translations.en}",
      "de": "${category.translations.de}",
      "es": "${category.translations.es}"
    },
    subcategories: [`;

  category.subcategories.forEach((subcat, index) => {
    tsString += `
      {
        id: '${subcat.id}',
        name: '${subcat.name}',
        slug: '${subcat.slug}',
        icon: undefined,
        translations: {
          "fr": "${subcat.translations.fr}",
          "ar": "${subcat.translations.ar}",
          "en": "${subcat.translations.en}",
          "de": "${subcat.translations.de}",
          "es": "${subcat.translations.es}"
        },
        subcategories: [`;

    subcat.subcategories.forEach((subsubcat, subIndex) => {
      tsString += `
          {
            id: '${subsubcat.id}',
            name: '${subsubcat.name}',
            slug: '${subsubcat.slug}',
            icon: undefined,
            translations: {
              "fr": "${subsubcat.translations.fr}",
              "ar": "${subsubcat.translations.ar}",
              "en": "${subsubcat.translations.en}",
              "de": "${subsubcat.translations.de}",
              "es": "${subsubcat.translations.es}"
            },
            subcategories: []
          }${subIndex < subcat.subcategories.length - 1 ? ',' : ''}`;
    });

    tsString += `
        ]
      }${index < category.subcategories.length - 1 ? ',' : ''}`;
  });

  tsString += `
    ]
  }`;

  return tsString;
}

const tsCategory = convertToTypeScript(puericultureEquipementBebeCategory);

console.log('✅ Structure de la catégorie créée avec succès');
console.log('📊 Sous-catégories:', puericultureEquipementBebeCategory.subcategories.length);
console.log('📊 Sous-sous-catégories totales:', 
  puericultureEquipementBebeCategory.subcategories.reduce((total, subcat) => total + subcat.subcategories.length, 0));

// Sauvegarde du fichier TypeScript
fs.writeFileSync('puericulture-equipement-bebe-category.ts', tsCategory, 'utf-8');
console.log('✅ Fichier TypeScript généré: puericulture-equipement-bebe-category.ts');

console.log('\n🌍 TRADUCTIONS MULTILINGUES:');
console.log('================================================================================');
console.log('Français:', puericultureEquipementBebeCategory.translations.fr);
console.log('Arabe:', puericultureEquipementBebeCategory.translations.ar);
console.log('Anglais:', puericultureEquipementBebeCategory.translations.en);
console.log('Allemand:', puericultureEquipementBebeCategory.translations.de);
console.log('Espagnol:', puericultureEquipementBebeCategory.translations.es);

console.log('\n👶 STRUCTURE COMPLÈTE:');
console.log('================================================================================');
puericultureEquipementBebeCategory.subcategories.forEach((subcat, index) => {
  console.log(`${index + 1}. ${subcat.name} (${subcat.translations.ar})`);
  subcat.subcategories.forEach((subsubcat, subIndex) => {
    console.log(`   ${subIndex + 1}. ${subsubcat.name} (${subsubcat.translations.ar})`);
  });
});

console.log('\n================================================================================');
console.log('🏁 FIN DE LA CRÉATION DE LA CATÉGORIE');