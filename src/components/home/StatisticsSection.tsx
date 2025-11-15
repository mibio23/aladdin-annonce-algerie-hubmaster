
const StatisticsSection = () => {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Aladdin en chiffres</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-3xl font-bold text-blue-600">12 345</p>
          <p className="text-gray-600">Annonces actives</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-3xl font-bold text-green-600">7 890</p>
          <p className="text-gray-600">Utilisateurs</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="text-3xl font-bold text-orange-600">1 230</p>
          <p className="text-gray-600">Boutiques</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-3xl font-bold text-purple-600">48</p>
          <p className="text-gray-600">Wilayas couvertes</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
