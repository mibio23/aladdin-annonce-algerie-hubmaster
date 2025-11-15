import Icon3D from '@/components/shared/Icon3D';
import { motion } from 'framer-motion';

const Features3D = () => {
  const featureContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="bg-white border rounded-lg p-8 shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={featureContainer}
    >
      <motion.h2 
        className="title-section text-center mb-8" 
        variants={featureItem}
      >
        Découvrez Aladdin en 3D Interactive
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div className="flex flex-col items-center" variants={featureItem}>
          <div className="bg-orange-50 p-4 rounded-full mb-4">
            <Icon3D type="cube" color="#F97316" hoverColor="#FB923C" height={100} width={100} />
          </div>
          <h3 className="font-semibold text-lg mb-2 text-center">Petites annonces</h3>
          <p className="text-gray-600 text-center">Des milliers d'annonces à découvrir</p>
        </motion.div>
        
        <motion.div className="flex flex-col items-center" variants={featureItem}>
          <div className="bg-blue-50 p-4 rounded-full mb-4">
            <Icon3D type="sphere" color="#0EA5E9" hoverColor="#38BDF8" height={100} width={100} />
          </div>
          <h3 className="font-semibold text-lg mb-2 text-center">Boutiques en ligne</h3>
          <p className="text-gray-600 text-center">Créez votre boutique en quelques clics</p>
        </motion.div>
        
        <motion.div className="flex flex-col items-center" variants={featureItem}>
          <div className="bg-purple-50 p-4 rounded-full mb-4">
            <Icon3D type="cone" color="#8B5CF6" hoverColor="#A78BFA" height={100} width={100} />
          </div>
          <h3 className="font-semibold text-lg mb-2 text-center">Messagerie intégrée</h3>
          <p className="text-gray-600 text-center">Communiquez facilement avec les vendeurs</p>
        </motion.div>
        
        <motion.div className="flex flex-col items-center" variants={featureItem}>
          <div className="bg-pink-50 p-4 rounded-full mb-4">
            <Icon3D type="torus" color="#D946EF" hoverColor="#E879F9" height={100} width={100} />
          </div>
          <h3 className="font-semibold text-lg mb-2 text-center">Recherches personnalisées</h3>
          <p className="text-gray-600 text-center">Trouvez exactement ce que vous cherchez</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Features3D;
