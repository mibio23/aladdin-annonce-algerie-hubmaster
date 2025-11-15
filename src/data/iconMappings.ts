
// Re-export du nouveau système optimisé
export { iconMappingManager, categoryIconMapping } from "./categories/optimized/iconMappingManager";

// Import pour l'export par défaut
import { categoryIconMapping } from "./categories/optimized/iconMappingManager";

// Compatibilité pour l'ancien système
export default categoryIconMapping;

