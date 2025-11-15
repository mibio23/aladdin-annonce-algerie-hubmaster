import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PaymentCancel: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <XCircle className="w-16 h-16 text-red-500" />
          </div>
          <CardTitle className="text-2xl">Paiement Annulé</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-gray-600">
            Votre paiement a été annulé. Aucun montant n'a été débité de votre compte.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-800 mb-2">Pourquoi mettre votre annonce en avant ?</h3>
            <ul className="text-sm text-blue-700 space-y-1 text-left">
              <li>• 5x plus de visibilité</li>
              <li>• Affichage prioritaire dans les résultats</li>
              <li>• Badge spécial "À la Une"</li>
              <li>• Plus de contacts et de ventes</li>
            </ul>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link to="/mes-annonces">
                <RefreshCw className="w-4 h-4 mr-2" />
                Réessayer le paiement
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
          </div>

          <div className="text-sm text-gray-500">
            <p>Besoin d'aide ? <Link to="/contact" className="text-blue-600 hover:underline">Contactez-nous</Link></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentCancel;