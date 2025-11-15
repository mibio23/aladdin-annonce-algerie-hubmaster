
import { MenuCategory } from "../../categoryTypes";
import { GraduationCap } from "lucide-react";

export const coursFormationsLecons: MenuCategory = {
  id: "cours-formations-lecons",
  name: "Cours, Formations & Leçons",
  slug: "cours-formations-lecons",
  icon: <GraduationCap className="h-5 w-5 text-blue-500" />,
  subcategories: [
    {
      id: "soutien-scolaire",
      name: "Soutien scolaire",
      slug: "soutien-scolaire",
      subcategories: [
        { id: "soutien-primaire-college", name: "Soutien scolaire (Primaire, Collège, Lycée)", slug: "soutien-primaire-college" },
        { id: "cours-particuliers", name: "Cours particuliers", slug: "cours-particuliers" },
        { id: "preparation-examens", name: "Préparation aux examens & Concours", slug: "preparation-examens" },
      ]
    },
    {
      id: "langues-formations",
      name: "Langues & Formations",
      slug: "langues-formations",
      subcategories: [
        { id: "cours-langues", name: "Cours de langues", slug: "cours-langues" },
        { id: "formations-professionnelles", name: "Formations professionnelles", slug: "formations-professionnelles" },
        { id: "certifications-diplomes", name: "Certifications & Diplômes", slug: "certifications-diplomes" },
        { id: "auto-ecoles", name: "Auto-écoles & Permis de conduire", slug: "auto-ecoles" },
      ]
    },
    {
      id: "cours-artistiques",
      name: "Cours artistiques",
      slug: "cours-artistiques",
      subcategories: [
        { id: "cours-musique", name: "Cours de musique", slug: "cours-musique" },
        { id: "cours-arts-plastiques", name: "Cours d'arts plastiques", slug: "cours-arts-plastiques" },
        { id: "cours-danse-theatre", name: "Cours de danse, Théâtre & Expression corporelle", slug: "cours-danse-theatre" },
        { id: "cours-cuisine", name: "Cours de cuisine & Œnologie", slug: "cours-cuisine" },
      ]
    }
  ]
};
