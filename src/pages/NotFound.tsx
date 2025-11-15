
import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-medium text-gray-600 mb-6">Page non trouvée</h2>
          <p className="text-gray-500 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" className="bg-orange-500 hover:bg-orange-600">
              <Link to="/">
                Retour à l'accueil
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/search">
                Rechercher une annonce
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
