const FooterBrands = () => {
  const phoneBrands = [
    "Apple", "Samsung", "Xiaomi", "Huawei", "Oppo", "Vivo", "Google", "OnePlus", "Motorola", "Sony", "Infinix"
  ];

  const carBrands = [
    "Audi", "Toyota", "Mahindra", "Honda", "Ford", "Volkswagen", "Hyundai", "Kia", "Nissan", "Renault", 
    "Citroën", "BMW", "Mercedes", "BYD", "JMC"
  ];

  const applianceBrands = [
    "Condor", "Midea", "Candy", "Raylan", "Iris", "Maxtor", "Maxwell", "Cristor", "Brandt", "Hisense", 
    "Bosch", "Ariston", "TCL", "Arcodym", "Bissell", "Neff", "Bomann", "DeLonghi", "Electrolux", "Thomson", 
    "Schneider", "Jumbo", "Kiowa", "iRobot", "Robuste", "Sonaric", "Hotpoint", "Techwood", "Tefal", 
    "Panasonic", "Moulinex", "Nespresso", "Kenwood", "Karcher", "Braun", "Canon", "Casio", "Babyliss"
  ];

  const fashionBrands = [
    "Zara", "Timberland", "Under Armour", "Paco Rabanne", "Pull & Bear", "Puma", "Reebook", "Nike", "NIVEA",
    "Hugo Boss", "L'Oreal", "Lacoste", "Festina", "Forever", "Garnier", "Gucci", "Chicco", "Decathlon",
    "Adidas", "Asics", "Celio", "SWAROVSKI", "Sephora", "Kiko"
  ];

  const otherBrands = [
    "ABRO", "Asus", "Clatronic", "DELL", "Géant ELECTRONICS", "Hama", "Hp", "Lenovo", "LG", "Remington", 
    "Remax", "Schneider", "THOMSON", "Naviforce", "Scorpion", "Seb", "Sonashi", "XIAOMI"
  ];

  return (
    <div className="footer-brands py-1 border-t border-gray-600">
      {/* Téléphones */}
      <div className="mb-0.5">
        <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-14 lg:grid-cols-16 xl:grid-cols-18 gap-x-0.5 gap-y-0">
          {phoneBrands.map((brand, index) => (
            <div key={index} className="px-0">
              <span className="text-xs text-gray-300 dark:text-gray-400 hover:text-white transition-colors cursor-pointer leading-none uppercase text-center block">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Automobiles */}
      <div className="mb-0.5">
        <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-14 lg:grid-cols-16 xl:grid-cols-18 gap-x-0.5 gap-y-0">
          {carBrands.map((brand, index) => (
            <div key={index} className="px-0">
              <span className="text-xs text-gray-300 dark:text-gray-400 hover:text-white transition-colors cursor-pointer leading-none uppercase text-center block">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Électroménager */}
      <div className="mb-0.5">
        <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-14 lg:grid-cols-16 xl:grid-cols-18 gap-x-0.5 gap-y-0">
          {applianceBrands.map((brand, index) => (
            <div key={index} className="px-0">
              <span className="text-xs text-gray-300 dark:text-gray-400 hover:text-white transition-colors cursor-pointer leading-none uppercase text-center block">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mode & Vêtements */}
      <div className="mb-0.5">
        <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-14 lg:grid-cols-16 xl:grid-cols-18 gap-x-0.5 gap-y-0">
          {fashionBrands.map((brand, index) => (
            <div key={index} className="px-0">
              <span className="text-xs text-gray-300 dark:text-gray-400 hover:text-white transition-colors cursor-pointer leading-none uppercase text-center block">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Autres marques */}
      <div className="mb-0.5">
        <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-14 lg:grid-cols-16 xl:grid-cols-18 gap-x-0.5 gap-y-0">
          {otherBrands.map((brand, index) => (
            <div key={index} className="px-0">
              <span className="text-xs text-gray-300 dark:text-gray-400 hover:text-white transition-colors cursor-pointer leading-none uppercase text-center block">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBrands;
