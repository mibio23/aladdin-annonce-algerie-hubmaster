
// Removed Wrench, Zap, Hammer, Tool from "lucide-react"

const RepairProfessionalsSection = () => {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h2 className="title-section text-center mb-6">Professionnels de réparation</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Plombier */}
        <div className="text-center py-4">
          <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
            {/* <Wrench className="h-8 w-8 text-blue-600" /> Icon removed */}
            <span className="text-blue-600 text-2xl font-bold">P</span>
          </div>
          <h3 className="font-medium mb-2">Plombier</h3>
          <p className="text-gray-600">Réparation de fuites et installations</p>
        </div>
        
        {/* Électricien */}
        <div className="text-center py-4">
          <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            {/* <Zap className="h-8 w-8 text-yellow-600" /> Icon removed */}
            <span className="text-yellow-600 text-2xl font-bold">E</span>
          </div>
          <h3 className="font-medium mb-2">Électricien</h3>
          <p className="text-gray-600">Installation et dépannage électrique</p>
        </div>
        
        {/* Menuisier */}
        <div className="text-center py-4">
          <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
            {/* <Hammer className="h-8 w-8 text-orange-600" /> Icon removed */}
            <span className="text-orange-600 text-2xl font-bold">M</span>
          </div>
          <h3 className="font-medium mb-2">Menuisier</h3>
          <p className="text-gray-600">Création et réparation de meubles</p>
        </div>
        
        {/* Mécanicien */}
        <div className="text-center py-4">
          <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
            {/* <Tool className="h-8 w-8 text-gray-600" /> Icon removed */}
            <span className="text-gray-600 text-2xl font-bold">M</span>
          </div>
          <h3 className="font-medium mb-2">Mécanicien</h3>
          <p className="text-gray-600">Réparation de véhicules motorisés</p>
        </div>
      </div>
    </div>
  );
};

export default RepairProfessionalsSection;
