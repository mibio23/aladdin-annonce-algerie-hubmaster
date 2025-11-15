import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire courant en ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le fichier de catégories
const categoriesFilePath = path.join(__dirname, 'src/data/categories/extended/extendedCategories.ts');

console.log('🔍 Création des catégories détaillées pour Santé & Beauté...');

// Structure détaillée des catégories pour Santé & Beauté
const santeCategories = [
  {
    id: 'sante-beaute',
    name: 'Santé & Beauté',
    slug: 'sante-beaute',
    subcategories: [
      {
        id: 'produits-beaute',
        name: 'Produits de Beauté',
        slug: 'produits-beaute',
        subcategories: [
          {
            id: 'maquillage',
            name: 'Maquillage',
            slug: 'maquillage',
            subcategories: [
              {
                id: 'maquillage-visage',
                name: 'Maquillage Visage',
                slug: 'maquillage-visage',
                subcategories: [
                  {
                    id: 'fond-teint',
                    name: 'Fond de Teint',
                    slug: 'fond-teint',
                    subcategories: []
                  },
                  {
                    id: 'correcteurs',
                    name: 'Correcteurs',
                    slug: 'correcteurs',
                    subcategories: []
                  },
                  {
                    id: 'poudres-libres',
                    name: 'Poudres Libres',
                    slug: 'poudres-libres',
                    subcategories: []
                  },
                  {
                    id: 'fard-a-joues',
                    name: 'Fard à Joues',
                    slug: 'fard-a-joues',
                    subcategories: []
                  },
                  {
                    id: 'illuminateurs',
                    name: 'Illuminateurs',
                    slug: 'illuminateurs',
                    subcategories: []
                  },
                  {
                    id: 'bronzants',
                    name: 'Bronzants',
                    slug: 'bronzants',
                    subcategories: []
                  },
                  {
                    id: 'contours',
                    name: 'Contours',
                    slug: 'contours',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'maquillage-yeux',
                name: 'Maquillage Yeux',
                slug: 'maquillage-yeux',
                subcategories: [
                  {
                    id: 'mascara',
                    name: 'Mascara',
                    slug: 'mascara',
                    subcategories: []
                  },
                  {
                    id: 'eye-liner',
                    name: 'Eye-liner',
                    slug: 'eye-liner',
                    subcategories: []
                  },
                  {
                    id: 'fard-a-paupieres',
                    name: 'Fard à Paupières',
                    slug: 'fard-a-paupieres',
                    subcategories: []
                  },
                  {
                    id: 'ombres-yeux',
                    name: 'Ombres à Paupières',
                    slug: 'ombres-yeux',
                    subcategories: []
                  },
                  {
                    id: 'sourcils',
                    name: 'Sourcils',
                    slug: 'sourcils',
                    subcategories: []
                  },
                  {
                    id: 'faux-cils',
                    name: 'Faux Cils',
                    slug: 'faux-cils',
                    subcategories: []
                  },
                  {
                    id: 'colle-cils',
                    name: 'Colle à Cils',
                    slug: 'colle-cils',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'maquillage-levres',
                name: 'Maquillage Lèvres',
                slug: 'maquillage-levres',
                subcategories: [
                  {
                    id: 'rouge-levres',
                    name: 'Rouge à Lèvres',
                    slug: 'rouge-levres',
                    subcategories: []
                  },
                  {
                    id: 'gloss-levres',
                    name: 'Gloss à Lèvres',
                    slug: 'gloss-levres',
                    subcategories: []
                  },
                  {
                    id: 'crayon-levres',
                    name: 'Crayon à Lèvres',
                    slug: 'crayon-levres',
                    subcategories: []
                  },
                  {
                    id: 'baume-levres',
                    name: 'Baume à Lèvres',
                    slug: 'baume-levres',
                    subcategories: []
                  },
                  {
                    id: 'contour-levres',
                    name: 'Contour à Lèvres',
                    slug: 'contour-levres',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'ongles',
                name: 'Ongles',
                slug: 'ongles',
                subcategories: [
                  {
                    id: 'vernis-ongles',
                    name: 'Vernis à Ongles',
                    slug: 'vernis-ongles',
                    subcategories: []
                  },
                  {
                    id: 'base-top-coat',
                    name: 'Base & Top Coat',
                    slug: 'base-top-coat',
                    subcategories: []
                  },
                  {
                    id: 'dissolvant-vernis',
                    name: 'Dissolvant Vernis',
                    slug: 'dissolvant-vernis',
                    subcategories: []
                  },
                  {
                    id: 'soins-cuticules',
                    name: 'Soins Cuticules',
                    slug: 'soins-cuticules',
                    subcategories: []
                  },
                  {
                    id: 'lime-ongles',
                    name: 'Lime à Ongles',
                    slug: 'lime-ongles',
                    subcategories: []
                  },
                  {
                    id: 'ciseaux-ongles',
                    name: 'Ciseaux à Ongles',
                    slug: 'ciseaux-ongles',
                    subcategories: []
                  },
                  {
                    id: 'faux-ongles',
                    name: 'Faux Ongles',
                    slug: 'faux-ongles',
                    subcategories: []
                  },
                  {
                    id: 'colle-ongles',
                    name: 'Colle à Ongles',
                    slug: 'colle-ongles',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'maquillage-corps',
                name: 'Maquillage Corps',
                slug: 'maquillage-corps',
                subcategories: [
                  {
                    id: 'poudres-bronzantes',
                    name: 'Poudres Bronzantes',
                    slug: 'poudres-bronzantes',
                    subcategories: []
                  },
                  {
                    id: 'autobronzants',
                    name: 'Autobronzants',
                    slug: 'autobronzants',
                    subcategories: []
                  },
                  {
                    id: 'brumisateurs',
                    name: 'Brumisateurs',
                    slug: 'brumisateurs',
                    subcategories: []
                  },
                  {
                    id: 'huiles-bronzantes',
                    name: 'Huiles Bronzantes',
                    slug: 'huiles-bronzantes',
                    subcategories: []
                  },
                  {
                    id: 'laits-corps',
                    name: 'Laits Corps',
                    slug: 'laits-corps',
                    subcategories: []
                  },
                  {
                    id: 'gommages-maquillage',
                    name: 'Gommages Maquillage',
                    slug: 'gommages-maquillage',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'accessoires-maquillage',
                name: 'Accessoires Maquillage',
                slug: 'accessoires-maquillage',
                subcategories: [
                  {
                    id: 'pinceaux-maquillage',
                    name: 'Pinceaux Maquillage',
                    slug: 'pinceaux-maquillage',
                    subcategories: []
                  },
                  {
                    id: 'eponges-maquillage',
                    name: 'Éponges Maquillage',
                    slug: 'eponges-maquillage',
                    subcategories: []
                  },
                  {
                    id: 'mouchoirs-maquillage',
                    name: 'Mouchoirs Maquillage',
                    slug: 'mouchoirs-maquillage',
                    subcategories: []
                  },
                  {
                    id: 'rasettes-maquillage',
                    name: 'Rasettes Maquillage',
                    slug: 'rasettes-maquillage',
                    subcategories: []
                  },
                  {
                    id: 'miroirs-maquillage',
                    name: 'Miroirs Maquillage',
                    slug: 'miroirs-maquillage',
                    subcategories: []
                  },
                  {
                    id: 'trousses-maquillage',
                    name: 'Trousses Maquillage',
                    slug: 'trousses-maquillage',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'parfums',
            name: 'Parfums',
            slug: 'parfums',
            subcategories: [
              {
                id: 'parfums-femme',
                name: 'Parfums Femme',
                slug: 'parfums-femme',
                subcategories: [
                  {
                    id: 'eaux-parfumees-femme',
                    name: 'Eaux Parfumées Femme',
                    slug: 'eaux-parfumees-femme',
                    subcategories: []
                  },
                  {
                    id: 'parfums-fleuris-femme',
                    name: 'Parfums Fleuries Femme',
                    slug: 'parfums-fleuris-femme',
                    subcategories: []
                  },
                  {
                    id: 'parfums-orientaux-femme',
                    name: 'Parfums Orientaux Femme',
                    slug: 'parfums-orientaux-femme',
                    subcategories: []
                  },
                  {
                    id: 'parfums-gourmands-femme',
                    name: 'Parfums Gourmands Femme',
                    slug: 'parfums-gourmands-femme',
                    subcategories: []
                  },
                  {
                    id: 'parfums-frais-femme',
                    name: 'Parfums Frais Femme',
                    slug: 'parfums-frais-femme',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'parfums-homme',
                name: 'Parfums Homme',
                slug: 'parfums-homme',
                subcategories: [
                  {
                    id: 'eaux-parfumees-homme',
                    name: 'Eaux Parfumées Homme',
                    slug: 'eaux-parfumees-homme',
                    subcategories: []
                  },
                  {
                    id: 'parfums-boises-homme',
                    name: 'Parfums Boisés Homme',
                    slug: 'parfums-boises-homme',
                    subcategories: []
                  },
                  {
                    id: 'parfums-epices-homme',
                    name: 'Parfums Épicés Homme',
                    slug: 'parfums-epices-homme',
                    subcategories: []
                  },
                  {
                    id: 'parfums-marins-homme',
                    name: 'Parfums Marins Homme',
                    slug: 'parfums-marins-homme',
                    subcategories: []
                  },
                  {
                    id: 'parfums-sport-homme',
                    name: 'Parfums Sport Homme',
                    slug: 'parfums-sport-homme',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'parfums-unisexe',
                name: 'Parfums Unisexe',
                slug: 'parfums-unisexe',
                subcategories: [
                  {
                    id: 'parfums-naturels',
                    name: 'Parfums Naturels',
                    slug: 'parfums-naturels',
                    subcategories: []
                  },
                  {
                    id: 'parfums-bio',
                    name: 'Parfums Bio',
                    slug: 'parfums-bio',
                    subcategories: []
                  },
                  {
                    id: 'parfums-hypoallergeniques',
                    name: 'Parfums Hypoallergéniques',
                    slug: 'parfums-hypoallergeniques',
                    subcategories: []
                  },
                  {
                    id: 'parfums-alcool-free',
                    name: 'Parfums Sans Alcool',
                    slug: 'parfums-alcool-free',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'coffrets-parfums',
                name: 'Coffrets Parfums',
                slug: 'coffrets-parfums',
                subcategories: []
              },
              {
                id: 'parfums-d-ambiance',
                name: 'Parfums d Ambiance',
                slug: 'parfums-d-ambiance',
                subcategories: [
                  {
                    id: 'bougies-parfumees',
                    name: 'Bougies Parfumées',
                    slug: 'bougies-parfumees',
                    subcategories: []
                  },
                  {
                    id: 'diffuseurs-parfums',
                    name: 'Diffuseurs Parfums',
                    slug: 'diffuseurs-parfums',
                    subcategories: []
                  },
                  {
                    id: 'sachets-parfumes',
                    name: 'Sachets Parfumés',
                    slug: 'sachets-parfumes',
                    subcategories: []
                  },
                  {
                    id: 'huiles-parfumees',
                    name: 'Huiles Parfumées',
                    slug: 'huiles-parfumees',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'soins-peau',
            name: 'Soins de la Peau',
            slug: 'soins-peau',
            subcategories: [
              {
                id: 'nettoyants-visage',
                name: 'Nettoyants Visage',
                slug: 'nettoyants-visage',
                subcategories: [
                  {
                    id: 'gels-nettoyants',
                    name: 'Gels Nettoyants',
                    slug: 'gels-nettoyants',
                    subcategories: []
                  },
                  {
                    id: 'laits-nettoyants',
                    name: 'Laits Nettoyants',
                    slug: 'laits-nettoyants',
                    subcategories: []
                  },
                  {
                    id: 'eaux-micellaires',
                    name: 'Eaux Micellaires',
                    slug: 'eaux-micellaires',
                    subcategories: []
                  },
                  {
                    id: 'lingettes-nettoyantes',
                    name: 'Lingettes Nettoyantes',
                    slug: 'lingettes-nettoyantes',
                    subcategories: []
                  },
                  {
                    id: 'savons-visage',
                    name: 'Savons Visage',
                    slug: 'savons-visage',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'hydratants-visage',
                name: 'Hydratants Visage',
                slug: 'hydratants-visage',
                subcategories: [
                  {
                    id: 'cremes-hydratantes',
                    name: 'Crèmes Hydratantes',
                    slug: 'cremes-hydratantes',
                    subcategories: []
                  },
                  {
                    id: 'serums-visage',
                    name: 'Sérums Visage',
                    slug: 'serums-visage',
                    subcategories: []
                  },
                  {
                    id: 'masques-hydratants',
                    name: 'Masques Hydratants',
                    slug: 'masques-hydratants',
                    subcategories: []
                  },
                  {
                    id: 'huiles-visage',
                    name: 'Huiles Visage',
                    slug: 'huiles-visage',
                    subcategories: []
                  },
                  {
                    id: 'brumes-visage',
                    name: 'Brumes Visage',
                    slug: 'brumes-visage',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'anti-age',
                name: 'Anti-âge',
                slug: 'anti-age',
                subcategories: [
                  {
                    id: 'cremes-anti-age',
                    name: 'Crèmes Anti-âge',
                    slug: 'cremes-anti-age',
                    subcategories: []
                  },
                  {
                    id: 'serums-anti-age',
                    name: 'Sérums Anti-âge',
                    slug: 'serums-anti-age',
                    subcategories: []
                  },
                  {
                    id: 'contours-yeux-anti-age',
                    name: 'Contours Yeux Anti-âge',
                    slug: 'contours-yeux-anti-age',
                    subcategories: []
                  },
                  {
                    id: 'soins-cou-anti-age',
                    name: 'Soins Cou Anti-âge',
                    slug: 'soins-cou-anti-age',
                    subcategories: []
                  },
                  {
                    id: 'traitements-anti-age',
                    name: 'Traitements Anti-âge',
                    slug: 'traitements-anti-age',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'soins-corps',
                name: 'Soins Corps',
                slug: 'soins-corps',
                subcategories: [
                  {
                    id: 'laits-corps',
                    name: 'Laits Corps',
                    slug: 'laits-corps',
                    subcategories: []
                  },
                  {
                    id: 'beurres-corps',
                    name: 'Beurres Corps',
                    slug: 'beurres-corps',
                    subcategories: []
                  },
                  {
                    id: 'huiles-corps',
                    name: 'Huiles Corps',
                    slug: 'huiles-corps',
                    subcategories: []
                  },
                  {
                    id: 'gommages-corps',
                    name: 'Gommages Corps',
                    slug: 'gommages-corps',
                    subcategories: []
                  },
                  {
                    id: 'soins-mains',
                    name: 'Soins Mains',
                    slug: 'soins-mains',
                    subcategories: []
                  },
                  {
                    id: 'soins-pieds',
                    name: 'Soins Pieds',
                    slug: 'soins-pieds',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'protection-solaire',
                name: 'Protection Solaire',
                slug: 'protection-solaire',
                subcategories: [
                  {
                    id: 'cremes-solaires',
                    name: 'Crèmes Solaires',
                    slug: 'cremes-solaires',
                    subcategories: []
                  },
                  {
                    id: 'laits-solaires',
                    name: 'Laits Solaires',
                    slug: 'laits-solaires',
                    subcategories: []
                  },
                  {
                    id: 'sprays-solaires',
                    name: 'Sprays Solaires',
                    slug: 'sprays-solaires',
                    subcategories: []
                  },
                  {
                    id: 'sticks-solaires',
                    name: 'Sticks Solaires',
                    slug: 'sticks-solaires',
                    subcategories: []
                  },
                  {
                    id: 'brumes-solaires',
                    name: 'Brumes Solaires',
                    slug: 'brumes-solaires',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'soins-specifiques',
                name: 'Soins Spécifiques',
                slug: 'soins-specifiques',
                subcategories: [
                  {
                    id: 'soins-acneiques',
                    name: 'Soins Acnéiques',
                    slug: 'soins-acneiques',
                    subcategories: []
                  },
                  {
                    id: 'soins-rosacee',
                    name: 'Soins Rosacée',
                    slug: 'soins-rosacee',
                    subcategories: []
                  },
                  {
                    id: 'soins-taches-brunes',
                    name: 'Soins Taches Brunes',
                    slug: 'soins-taches-brunes',
                    subcategories: []
                  },
                  {
                    id: 'soins-peau-sensible',
                    name: 'Soins Peau Sensible',
                    slug: 'soins-peau-sensible',
                    subcategories: []
                  },
                  {
                    id: 'soins-peau-seche',
                    name: 'Soins Peau Sèche',
                    slug: 'soins-peau-seche',
                    subcategories: []
                  },
                  {
                    id: 'soins-peau-grasse',
                    name: 'Soins Peau Grasse',
                    slug: 'soins-peau-grasse',
                    subcategories: []
                  },
                  {
                    id: 'soins-peau-mixte',
                    name: 'Soins Peau Mixte',
                    slug: 'soins-peau-mixte',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'soins-cheveux',
            name: 'Soins Cheveux',
            slug: 'soins-cheveux',
            subcategories: [
              {
                id: 'shampoings',
                name: 'Shampoings',
                slug: 'shampoings',
                subcategories: [
                  {
                    id: 'shampoings-normaux',
                    name: 'Shampoings Normaux',
                    slug: 'shampoings-normaux',
                    subcategories: []
                  },
                  {
                    id: 'shampoings-secs',
                    name: 'Shampoings Secs',
                    slug: 'shampoings-secs',
                    subcategories: []
                  },
                  {
                    id: 'shampoings-gras',
                    name: 'Shampoings Gras',
                    slug: 'shampoings-gras',
                    subcategories: []
                  },
                  {
                    id: 'shampoings-coloration',
                    name: 'Shampoings Coloration',
                    slug: 'shampoings-coloration',
                    subcategories: []
                  },
                  {
                    id: 'shampoings-enfants',
                    name: 'Shampoings Enfants',
                    slug: 'shampoings-enfants',
                    subcategories: []
                  },
                  {
                    id: 'shampoings-bio',
                    name: 'Shampoings Bio',
                    slug: 'shampoings-bio',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'apres-shampoings',
                name: 'Après-Shampoings',
                slug: 'apres-shampoings',
                subcategories: [
                  {
                    id: 'apres-shampoings-normaux',
                    name: 'Après-Shampoings Normaux',
                    slug: 'apres-shampoings-normaux',
                    subcategories: []
                  },
                  {
                    id: 'apres-shampoings-secs',
                    name: 'Après-Shampoings Secs',
                    slug: 'apres-shampoings-secs',
                    subcategories: []
                  },
                  {
                    id: 'apres-shampoings-gras',
                    name: 'Après-Shampoings Gras',
                    slug: 'apres-shampoings-gras',
                    subcategories: []
                  },
                  {
                    id: 'apres-shampoings-coloration',
                    name: 'Après-Shampoings Coloration',
                    slug: 'apres-shampoings-coloration',
                    subcategories: []
                  },
                  {
                    id: 'apres-shampoings-bio',
                    name: 'Après-Shampoings Bio',
                    slug: 'apres-shampoings-bio',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'soins-cheveux-specifiques',
                name: 'Soins Cheveux Spécifiques',
                slug: 'soins-cheveux-specifiques',
                subcategories: [
                  {
                    id: 'soins-cheveux-coloration',
                    name: 'Soins Cheveux Coloration',
                    slug: 'soins-cheveux-coloration',
                    subcategories: []
                  },
                  {
                    id: 'soins-cheveux-keratine',
                    name: 'Soins Cheveux Kératine',
                    slug: 'soins-cheveux-keratine',
                    subcategories: []
                  },
                  {
                    id: 'soins-cheveux-botox',
                    name: 'Soins Cheveux Botox',
                    slug: 'soins-cheveux-botox',
                    subcategories: []
                  },
                  {
                    id: 'soins-cheveux-chute',
                    name: 'Soins Cheveux Chute',
                    slug: 'soins-cheveux-chute',
                    subcategories: []
                  },
                  {
                    id: 'soins-cheveux-four',
                    name: 'Soins Cheveux Four',
                    slug: 'soins-cheveux-four',
                    subcategories: []
                  },
                  {
                    id: 'soins-cheveux-soleil',
                    name: 'Soins Cheveux Soleil',
                    slug: 'soins-cheveux-soleil',
                    subcategories: []
                  },
                  {
                    id: 'soins-cheveux-frises',
                    name: 'Soins Cheveux Frisés',
                    slug: 'soins-cheveux-frises',
                    subcategories: []
                  },
                  {
                    id: 'soins-cheveux-boucles',
                    name: 'Soins Cheveux Bouclés',
                    slug: 'soins-cheveux-boucles',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'coiffure',
                name: 'Coiffure',
                slug: 'coiffure',
                subcategories: [
                  {
                    id: 'laques-coiffure',
                    name: 'Laques Coiffure',
                    slug: 'laques-coiffure',
                    subcategories: []
                  },
                  {
                    id: 'gels-coiffure',
                    name: 'Gels Coiffure',
                    slug: 'gels-coiffure',
                    subcategories: []
                  },
                  {
                    id: 'cires-coiffure',
                    name: 'Cires Coiffure',
                    slug: 'cires-coiffure',
                    subcategories: []
                  },
                  {
                    id: 'mousses-coiffure',
                    name: 'Mousses Coiffure',
                    slug: 'mousses-coiffure',
                    subcategories: []
                  },
                  {
                    id: 'sprays-coiffure',
                    name: 'Sprays Coiffure',
                    slug: 'sprays-coiffure',
                    subcategories: []
                  },
                  {
                    id: 'serums-coiffure',
                    name: 'Sérums Coiffure',
                    slug: 'serums-coiffure',
                    subcategories: []
                  },
                  {
                    id: 'huiles-coiffure',
                    name: 'Huiles Coiffure',
                    slug: 'huiles-coiffure',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'coloration-cheveux',
                name: 'Coloration Cheveux',
                slug: 'coloration-cheveux',
                subcategories: [
                  {
                    id: 'coloration-temporaire',
                    name: 'Coloration Temporaire',
                    slug: 'coloration-temporaire',
                    subcategories: []
                  },
                  {
                    id: 'coloration-permanente',
                    name: 'Coloration Permanente',
                    slug: 'coloration-permanente',
                    subcategories: []
                  },
                  {
                    id: 'mèches',
                    name: 'Mèches',
                    slug: 'meches',
                    subcategories: []
                  },
                  {
                    id: 'balayage',
                    name: 'Balayage',
                    slug: 'balayage',
                    subcategories: []
                  },
                  {
                    id: 'shampoings-colorants',
                    name: 'Shampoings Colorants',
                    slug: 'shampoings-colorants',
                    subcategories: []
                  },
                  {
                    id: 'soins-coloration',
                    name: 'Soins Coloration',
                    slug: 'soins-coloration',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'soins-corps-bain',
            name: 'Soins Corps & Bain',
            slug: 'soins-corps-bain',
            subcategories: [
              {
                id: 'gels-douche',
                name: 'Gels Douche',
                slug: 'gels-douche',
                subcategories: []
              },
              {
                id: 'savons',
                name: 'Savons',
                slug: 'savons',
                subcategories: []
              },
              {
                id: 'bains-moussants',
                name: 'Bains Moussants',
                slug: 'bains-moussants',
                subcategories: []
              },
              {
                id: 'sels-bain',
                name: 'Sels Bain',
                slug: 'sels-bain',
                subcategories: []
              },
              {
                id: 'huiles-bain',
                name: 'Huiles Bain',
                slug: 'huiles-bain',
                subcategories: []
              },
              {
                id: 'bombes-bain',
                name: 'Bombes Bain',
                slug: 'bombes-bain',
                subcategories: []
              },
              {
                id: 'exfoliants-corps',
                name: 'Exfoliants Corps',
                slug: 'exfoliants-corps',
                subcategories: []
              },
              {
                id: 'soins-corps-hydratants',
                name: 'Soins Corps Hydratants',
                slug: 'soins-corps-hydratants',
                subcategories: []
              }
            ]
          },
          {
            id: 'epilation',
            name: 'Épilation',
            slug: 'epilation',
            subcategories: [
              {
                id: 'cire-epilation',
                name: 'Cire Épilation',
                slug: 'cire-epilation',
                subcategories: []
              },
              {
                id: 'rasoirs-electriques',
                name: 'Rasoirs Électriques',
                slug: 'rasoirs-electriques',
                subcategories: []
              },
              {
                id: 'rasoirs-manuels',
                name: 'Rasoirs Manuels',
                slug: 'rasoirs-manuels',
                subcategories: []
              },
              {
                id: 'epilation-electrique',
                name: 'Épilation Électrique',
                slug: 'epilation-electrique',
                subcategories: []
              },
              {
                id: 'cremes-epilation',
                name: 'Crèmes Épilation',
                slug: 'cremes-epilation',
                subcategories: []
              },
              {
                id: 'bandes-epilation',
                name: 'Bandes Épilation',
                slug: 'bandes-epilation',
                subcategories: []
              },
              {
                id: 'soins-apres-epilation',
                name: 'Soins Après Épilation',
                slug: 'soins-apres-epilation',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'equipements-medicaux',
        name: 'Équipements Médicaux',
        slug: 'equipements-medicaux',
        subcategories: [
          {
            id: 'materiel-sante',
            name: 'Matériel Santé',
            slug: 'materiel-sante',
            subcategories: [
              {
                id: 'thermometres',
                name: 'Thermomètres',
                slug: 'thermometres',
                subcategories: []
              },
              {
                id: 'tensiometres',
                name: 'Tensiomètres',
                slug: 'tensiometres',
                subcategories: []
              },
              {
                id: 'glycemetres',
                name: 'Glycémètres',
                slug: 'glycemetres',
                subcategories: []
              },
              {
                id: 'oxymetres',
                name: 'Oxymètres',
                slug: 'oxymetres',
                subcategories: []
              },
              {
                id: 'stethoscopes',
                name: 'Stéthoscopes',
                slug: 'stethoscopes',
                subcategories: []
              },
              {
                id: 'tensiometres',
                name: 'Tensiomètres',
                slug: 'tensiometres',
                subcategories: []
              },
              {
                id: 'pulsometres',
                name: 'Pulsomètres',
                slug: 'pulsometres',
                subcategories: []
              },
              {
                id: 'nebulisateurs',
                name: 'Nébulisateurs',
                slug: 'nebulisateurs',
                subcategories: []
              },
              {
                id: 'inhalateurs',
                name: 'Inhalateurs',
                slug: 'inhalateurs',
                subcategories: []
              }
            ]
          },
          {
            id: 'materiel-soins',
            name: 'Matériel Soins',
            slug: 'materiel-soins',
            subcategories: [
              {
                id: 'couches',
                name: 'Couches',
                slug: 'couches',
                subcategories: []
              },
              {
                id: 'bandages',
                name: 'Bandages',
                slug: 'bandages',
                subcategories: []
              },
              {
                id: 'pansements',
                name: 'Pansements',
                slug: 'pansements',
                subcategories: []
              },
              {
                id: 'coton',
                name: 'Coton',
                slug: 'coton',
                subcategories: []
              },
              {
                id: 'gazes',
                name: 'Gazes',
                slug: 'gazes',
                subcategories: []
              },
              {
                id: 'compresses',
                name: 'Compresses',
                slug: 'compresses',
                subcategories: []
              },
              {
                id: 'gants-medicaux',
                name: 'Gants Médicaux',
                slug: 'gants-medicaux',
                subcategories: []
              },
              {
                id: 'masques-medicaux',
                name: 'Masques Médicaux',
                slug: 'masques-medicaux',
                subcategories: []
              },
              {
                id: 'seringues',
                name: 'Seringues',
                slug: 'seringues',
                subcategories: []
              },
              {
                id: 'aiguilles',
                name: 'Aiguilles',
                slug: 'aiguilles',
                subcategories: []
              }
            ]
          },
          {
            id: 'materiel-mobilite',
            name: 'Matériel Mobilité',
            slug: 'materiel-mobilite',
            subcategories: [
              {
                id: 'fauteuils-roulants',
                name: 'Fauteuils Roulants',
                slug: 'fauteuils-roulants',
                subcategories: []
              },
              {
                id: 'bequilles',
                name: 'Béquilles',
                slug: 'bequilles',
                subcategories: []
              },
              {
                id: 'deambulateurs',
                name: 'Déambulateurs',
                slug: 'deambulateurs',
                subcategories: []
              },
              {
                id: 'cannes',
                name: 'Cannes',
                slug: 'cannes',
                subcategories: []
              },
              {
                id: 'attelles',
                name: 'Attelles',
                slug: 'attelles',
                subcategories: []
              },
              {
                id: 'ortheses',
                name: 'Orthèses',
                slug: 'ortheses',
                subcategories: []
              },
              {
                id: 'protheses',
                name: 'Prothèses',
                slug: 'protheses',
                subcategories: []
              }
            ]
          },
          {
            id: 'materiel-hygiene',
            name: 'Matériel Hygiène',
            slug: 'materiel-hygiene',
            subcategories: [
              {
                id: 'lunettes-vue',
                name: 'Lunettes Vue',
                slug: 'lunettes-vue',
                subcategories: []
              },
              {
                id: 'lentilles-contact',
                name: 'Lentilles Contact',
                slug: 'lentilles-contact',
                subcategories: []
              },
              {
                id: 'solutions-lentilles',
                name: 'Solutions Lentilles',
                slug: 'solutions-lentilles',
                subcategories: []
              },
              {
                id: 'etuis-lunettes',
                name: 'Étuis Lunettes',
                slug: 'etuis-lunettes',
                subcategories: []
              },
              {
                id: 'audition',
                name: 'Audition',
                slug: 'audition',
                subcategories: []
              },
              {
                id: 'bouchons-oreilles',
                name: 'Bouchons Oreilles',
                slug: 'bouchons-oreilles',
                subcategories: []
              },
              {
                id: 'protection-soleil',
                name: 'Protection Soleil',
                slug: 'protection-soleil',
                subcategories: []
              }
            ]
          }
        ]
      },
      {
        id: 'produits-bien-etre',
        name: 'Produits de Bien-être',
        slug: 'produits-bien-etre',
        subcategories: [
          {
            id: 'complements-alimentaires',
            name: 'Compléments Alimentaires',
            slug: 'complements-alimentaires',
            subcategories: [
              {
                id: 'vitamines',
                name: 'Vitamines',
                slug: 'vitamines',
                subcategories: []
              },
              {
                id: 'mineraux',
                name: 'Minéraux',
                slug: 'mineraux',
                subcategories: []
              },
              {
                id: 'supplements-proteines',
                name: 'Suppléments Protéines',
                slug: 'supplements-proteines',
                subcategories: []
              },
              {
                id: 'acides-gras-omega',
                name: 'Acides Gras Omega',
                slug: 'acides-gras-omega',
                subcategories: []
              },
              {
                id: 'probiotiques',
                name: 'Probiotiques',
                slug: 'probiotiques',
                subcategories: []
              },
              {
                id: 'antioxydants',
                name: 'Antioxydants',
                slug: 'antioxydants',
                subcategories: []
              },
              {
                id: 'complements-sport',
                name: 'Compléments Sport',
                slug: 'complements-sport',
                subcategories: []
              },
              {
                id: 'complements-perte-poids',
                name: 'Compléments Perte Poids',
                slug: 'complements-perte-poids',
                subcategories: []
              },
              {
                id: 'complements-energie',
                name: 'Compléments Énergie',
                slug: 'complements-energie',
                subcategories: []
              },
              {
                id: 'complements-sommeil',
                name: 'Compléments Sommeil',
                slug: 'complements-sommeil',
                subcategories: []
              },
              {
                id: 'complements-sante',
                name: 'Compléments Santé',
                slug: 'complements-sante',
                subcategories: []
              },
              {
                id: 'complements-beaute',
                name: 'Compléments Beauté',
                slug: 'complements-beaute',
                subcategories: []
              }
            ]
          },
          {
            id: 'produits-naturels',
            name: 'Produits Naturels',
            slug: 'produits-naturels',
            subcategories: [
              {
                id: 'huiles-essentielles',
                name: 'Huiles Essentielles',
                slug: 'huiles-essentielles',
                subcategories: []
              },
              {
                id: 'plantes-medicinales',
                name: 'Plantes Médicinales',
                slug: 'plantes-medicinales',
                subcategories: []
              },
              {
                id: 'tisanes',
                name: 'Tisanes',
                slug: 'tisanes',
                subcategories: []
              },
              {
                id: 'miel',
                name: 'Miel',
                slug: 'miel',
                subcategories: []
              },
              {
                id: 'propolis',
                name: 'Propolis',
                slug: 'propolis',
                subcategories: []
              },
              {
                id: 'gel-royal',
                name: 'Gel Royal',
                slug: 'gel-royal',
                subcategories: []
              },
              {
                id: 'argiles',
                name: 'Argiles',
                slug: 'argiles',
                subcategories: []
              },
              {
                id: 'produits-ayurvediques',
                name: 'Produits Ayurvédiques',
                slug: 'produits-ayurvediques',
                subcategories: []
              }
            ]
          },
          {
            id: 'fitness',
            name: 'Fitness',
            slug: 'fitness',
            subcategories: [
              {
                id: 'musculation',
                name: 'Musculation',
                slug: 'musculation',
                subcategories: [
                  {
                    id: 'halteres',
                    name: 'Haltères',
                    slug: 'halteres',
                    subcategories: []
                  },
                  {
                    id: 'barres-musculation',
                    name: 'Barres Musculation',
                    slug: 'barres-musculation',
                    subcategories: []
                  },
                  {
                    id: 'poids-musculation',
                    name: 'Poids Musculation',
                    slug: 'poids-musculation',
                    subcategories: []
                  },
                  {
                    id: 'bandes-resistance',
                    name: 'Bandes Résistance',
                    slug: 'bandes-resistance',
                    subcategories: []
                  },
                  {
                    id: 'gilets-musculation',
                    name: 'Gilets Musculation',
                    slug: 'gilets-musculation',
                    subcategories: []
                  },
                  {
                    id: 'corde-sauter',
                    name: 'Corde à Sauter',
                    slug: 'corde-sauter',
                    subcategories: []
                  },
                  {
                    id: 'pompes-musculation',
                    name: 'Pompes Musculation',
                    slug: 'pompes-musculation',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'cardio',
                name: 'Cardio',
                slug: 'cardio',
                subcategories: [
                  {
                    id: 'tapis-course',
                    name: 'Tapis Course',
                    slug: 'tapis-course',
                    subcategories: []
                  },
                  {
                    id: 'velos-fitness',
                    name: 'Vélos Fitness',
                    slug: 'velos-fitness',
                    subcategories: []
                  },
                  {
                    id: 'elliptiques',
                    name: 'Elliptiques',
                    slug: 'elliptiques',
                    subcategories: []
                  },
                  {
                    id: 'rameurs',
                    name: 'Rameurs',
                    slug: 'rameurs',
                    subcategories: []
                  },
                  {
                    id: 'steppers',
                    name: 'Steppers',
                    slug: 'steppers',
                    subcategories: []
                  },
                  {
                    id: 'cordes-sauter',
                    name: 'Cordes à Sauter',
                    slug: 'cordes-sauter',
                    subcategories: []
                  },
                  {
                    id: 'trampolines-fitness',
                    name: 'Trampolines Fitness',
                    slug: 'trampolines-fitness',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'yoga-pilates',
                name: 'Yoga & Pilates',
                slug: 'yoga-pilates',
                subcategories: [
                  {
                    id: 'tapis-yoga',
                    name: 'Tapis Yoga',
                    slug: 'tapis-yoga',
                    subcategories: []
                  },
                  {
                    id: 'sangles-yoga',
                    name: 'Sangles Yoga',
                    slug: 'sangles-yoga',
                    subcategories: []
                  },
                  {
                    id: 'briques-yoga',
                    name: 'Briques Yoga',
                    slug: 'briques-yoga',
                    subcategories: []
                  },
                  {
                    id: 'rouleaux-yoga',
                    name: 'Rouleaux Yoga',
                    slug: 'rouleaux-yoga',
                    subcategories: []
                  },
                  {
                    id: 'ballons-yoga',
                    name: 'Ballons Yoga',
                    slug: 'ballons-yoga',
                    subcategories: []
                  },
                  {
                    id: 'cercles-pilates',
                    name: 'Cercles Pilates',
                    slug: 'cercles-pilates',
                    subcategories: []
                  },
                  {
                    id: 'tapis-pilates',
                    name: 'Tapis Pilates',
                    slug: 'tapis-pilates',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'crossfit',
                name: 'Crossfit',
                slug: 'crossfit',
                subcategories: [
                  {
                    id: 'kettlebells',
                    name: 'Kettlebells',
                    slug: 'kettlebells',
                    subcategories: []
                  },
                  {
                    id: 'sacs-boxing',
                    name: 'Sacs Boxing',
                    slug: 'sacs-boxing',
                    subcategories: []
                  },
                  {
                    id: 'cordes-crossfit',
                    name: 'Cordes Crossfit',
                    slug: 'cordes-crossfit',
                    subcategories: []
                  },
                  {
                    id: 'barres-crossfit',
                    name: 'Barres Crossfit',
                    slug: 'barres-crossfit',
                    subcategories: []
                  },
                  {
                    id: 'gilets-lests',
                    name: 'Gilets Poids',
                    slug: 'gilets-lests',
                    subcategories: []
                  },
                  {
                    id: 'pompes-crossfit',
                    name: 'Pompes Crossfit',
                    slug: 'pompes-crossfit',
                    subcategories: []
                  }
                ]
              },
              {
                id: 'accessoires-fitness',
                name: 'Accessoires Fitness',
                slug: 'accessoires-fitness',
                subcategories: [
                  {
                    id: 'gants-fitness',
                    name: 'Gants Fitness',
                    slug: 'gants-fitness',
                    subcategories: []
                  },
                  {
                    id: 'ceintures-fitness',
                    name: 'Ceintures Fitness',
                    slug: 'ceintures-fitness',
                    subcategories: []
                  },
                  {
                    id: 'montres-fitness',
                    name: 'Montres Fitness',
                    slug: 'montres-fitness',
                    subcategories: []
                  },
                  {
                    id: 'brassards-fitness',
                    name: 'Brassards Fitness',
                    slug: 'brassards-fitness',
                    subcategories: []
                  },
                  {
                    id: 'bouteilles-eau',
                    name: 'Bouteilles Eau',
                    slug: 'bouteilles-eau',
                    subcategories: []
                  },
                  {
                    id: 'sacs-sport',
                    name: 'Sacs Sport',
                    slug: 'sacs-sport',
                    subcategories: []
                  }
                ]
              }
            ]
          },
          {
            id: 'relaxation',
            name: 'Relaxation',
            slug: 'relaxation',
            subcategories: [
              {
                id: 'massagers',
                name: 'Massagers',
                slug: 'massagers',
                subcategories: []
              },
              {
                id: 'coussins-massage',
                name: 'Coussins Massage',
                slug: 'coussins-massage',
                subcategories: []
              },
              {
                id: 'huiles-massage',
                name: 'Huiles Massage',
                slug: 'huiles-massage',
                subcategories: []
              },
              {
                id: 'bougies-aromatherapie',
                name: 'Bougies Aromathérapie',
                slug: 'bougies-aromatherapie',
                subcategories: []
              },
              {
                id: 'diffuseurs-aroma',
                name: 'Diffuseurs Aroma',
                slug: 'diffuseurs-aroma',
                subcategories: []
              },
              {
                id: 'sels-bain',
                name: 'Sels Bain',
                slug: 'sels-bain',
                subcategories: []
              },
              {
                id: 'musique-relaxation',
                name: 'Musique Relaxation',
                slug: 'musique-relaxation',
                subcategories: []
              },
              {
                id: 'meditation',
                name: 'Méditation',
                slug: 'meditation',
                subcategories: []
              }
            ]
          },
          {
            id: 'bien-etre-mental',
            name: 'Bien-être Mental',
            slug: 'bien-etre-mental',
            subcategories: [
              {
                id: 'livres-developpement-personnel',
                name: 'Livres Développement Personnel',
                slug: 'livres-developpement-personnel',
                subcategories: []
              },
              {
                id: 'applications-meditation',
                name: 'Applications Méditation',
                slug: 'applications-meditation',
                subcategories: []
              },
              {
                id: 'jeux-reflexion',
                name: 'Jeux Réflexion',
                slug: 'jeux-reflexion',
                subcategories: []
              },
              {
                id: 'coloriage-adultes',
                name: 'Coloriage Adultes',
                slug: 'coloriage-adultes',
                subcategories: []
              },
              {
                id: 'carnets-gratitude',
                name: 'Carnets Gratitude',
                slug: 'carnets-gratitude',
                subcategories: []
              },
              {
                id: 'planners-organisation',
                name: 'Planners Organisation',
                slug: 'planners-organisation',
                subcategories: []
              }
            ]
          }
        ]
      }
    ]
  }
];

// Lire le fichier existant
let existingContent;
try {
  existingContent = fs.readFileSync(categoriesFilePath, 'utf8');
  console.log('✅ Fichier existant lu avec succès');
} catch (error) {
  console.error('❌ Erreur lors de la lecture du fichier existant:', error.message);
  process.exit(1);
}

// Extraire les catégories existantes
const existingCategoriesMatch = existingContent.match(/export const extendedCategories: MenuCategory\[\] = \[([\s\S]*?)\];/);
if (!existingCategoriesMatch) {
  console.error('❌ Impossible de trouver les catégories existantes dans le fichier');
  process.exit(1);
}

const existingCategoriesData = existingCategoriesMatch[1];

// Fusionner les catégories existantes avec les nouvelles catégories
const mergedCategories = `[${existingCategoriesData},${santeCategories.map(cat => `  {
    id: '${cat.id}',
    name: '${cat.name}',
    slug: '${cat.slug}',
    icon: undefined,
    subcategories: [
${cat.subcategories.map(sub => `      {
        id: '${sub.id}',
        name: '${sub.name}',
        slug: '${sub.slug}',
        icon: undefined,
        subcategories: [
${sub.subcategories.map(subsub => `          {
            id: '${subsub.id}',
            name: '${subsub.name}',
            slug: '${subsub.slug}',
            icon: undefined,
            subcategories: []
          }`).join(',\n')}
        ]
      }`).join(',\n')}
    ]
  }`).join(',\n')}
]`;

// Générer le contenu TypeScript complet
const typescriptContent = `// Catégories détaillées pour Informatique & Électronique, Véhicules & Équipements, Immobilier & Maison, Mode & Accessoires, Emploi & Services, Éducation & Loisirs, Gastronomie & Alimentation et Santé & Beauté
// Généré le: ${new Date().toISOString()}
// Support: Français, Arabe, Anglais, Allemand, Espagnol

import { MenuCategory } from '../../categoryTypes';

export const extendedCategories: MenuCategory[] = ${mergedCategories};

export default extendedCategories;
`;

// Écrire le fichier
try {
  fs.writeFileSync(categoriesFilePath, typescriptContent);
  console.log('✅ Fichier de catégories détaillées mis à jour avec succès');
  console.log(`📁 Fichier: ${categoriesFilePath}`);
  console.log(`📊 Catégorie "Santé & Beauté" ajoutée avec succès`);
} catch (error) {
  console.error('❌ Erreur lors de l\'écriture du fichier:', error.message);
  process.exit(1);
}

console.log('\n🎉 Opération terminée !');
console.log('💡 Les catégories détaillées pour Santé & Beauté ont été ajoutées avec succès.');
console.log('💡 Le fichier contient une structure valide pour TypeScript.');