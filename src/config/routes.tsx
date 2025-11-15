import React from "react";
import { Route, Navigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";

// Pages imports
import Index from "@/pages/Index";
import CategoryPage from "@/pages/CategoryPage";
import SubcategoryPage from "@/pages/SubcategoryPage";
import NotFound from "@/pages/NotFound";
import NotreHistoire from "@/pages/NotreHistoire";
import Carrieres from "@/pages/Carrieres";
import CommentCaMarche from "@/pages/CommentCaMarche";
import Contact from "@/pages/Contact";
import ConditionsGenerales from "@/pages/ConditionsGenerales";
import PolitiqueConfidentialite from "@/pages/PolitiqueConfidentialite";
import MentionsLegales from "@/pages/MentionsLegales";
import Authentification from "@/pages/Authentification";

import Actualites from "@/pages/Actualites";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import GestionCookies from "@/pages/GestionCookies";
import SignalerContenu from "@/pages/SignalerContenu";
import ConseilsSecurite from "@/pages/ConseilsSecurite";
import EspacePro from "@/pages/EspacePro";
import CentreAide from "@/pages/CentreAide";
import PlanDuSite from "@/pages/PlanDuSite";
import FAQ from "@/pages/FAQ";
import Inscription from "@/pages/Inscription";
import Connexion from "@/pages/Connexion";

import Parametres from "@/pages/Parametres";
import MotDePasseOublie from "@/pages/MotDePasseOublie";
import AnnouncementDetailsPage from "@/pages/AnnouncementDetailsPage";
import ShopDetails from "@/pages/ShopDetails";
import TelechargerApp from "@/pages/TelechargerApp";
import PublicProfile from "@/pages/PublicProfile";
import PaymentSuccess from "@/pages/PaymentSuccess";
import PaymentCancel from "@/pages/PaymentCancel";

import FavoritesList from "@/components/favorites/FavoritesList";
import SearchResultsPage from "@/pages/SearchResultsPage";
import Chat from "@/pages/Chat";
import MyAnnouncements from "@/pages/MyAnnouncements";
import BookingCalendar from "@/pages/BookingCalendar";
import CreateAnnouncementComplete from "@/pages/CreateAnnouncementComplete";
import UserDashboard from "@/components/dashboard/UserDashboard";
import MesBoutiques from "@/pages/MesBoutiques";
import CreateShopPage from "@/pages/CreateShopPage";
import RechercheProduit from "@/pages/RechercheProduit";


// Helper pour créer une route avec layout
const withLayout = (Component: React.ComponentType, showHeader: boolean = true) => (
  <AppLayout showHeader={showHeader}>
    <Component />
  </AppLayout>
);

// Routes publiques avec header
export const publicRoutes = [
  <Route key="home" path="/" element={withLayout(Index)} />,
  <Route key="notre-histoire" path="/notre-histoire" element={withLayout(NotreHistoire)} />,
  <Route key="carrieres" path="/carrieres" element={withLayout(Carrieres)} />,
  <Route key="comment-ca-marche" path="/comment-ca-marche" element={withLayout(CommentCaMarche)} />,
  <Route key="contact" path="/contact" element={withLayout(Contact)} />,
  <Route key="conditions-generales" path="/conditions-generales" element={withLayout(ConditionsGenerales)} />,
  <Route key="politique-confidentialite" path="/politique-confidentialite" element={withLayout(PolitiqueConfidentialite)} />,
  <Route key="mentions-legales" path="/mentions-legales" element={withLayout(MentionsLegales)} />,
  <Route key="authentification" path="/authentification" element={withLayout(Authentification)} />,
  <Route key="gestion-cookies" path="/gestion-cookies" element={withLayout(GestionCookies)} />,
  <Route key="signaler" path="/signaler" element={withLayout(SignalerContenu)} />,
  <Route key="plan-du-site" path="/plan-du-site" element={withLayout(PlanDuSite)} />,
  <Route key="actualites" path="/actualites" element={withLayout(Actualites)} />,
  <Route key="category" path="/category/:slug" element={withLayout(CategoryPage)} />,
  <Route key="subcategory" path="/category/:slug/:subslug" element={withLayout(SubcategoryPage)} />,
  <Route key="annonce" path="/annonce/:id" element={withLayout(AnnouncementDetailsPage)} />,
  <Route key="shop" path="/shop/:id" element={withLayout(ShopDetails)} />,
  <Route key="conseils-securite" path="/conseils-securite" element={withLayout(ConseilsSecurite)} />,
  <Route key="pro" path="/pro" element={withLayout(EspacePro)} />,
  <Route key="aide" path="/aide" element={withLayout(CentreAide)} />,
  <Route key="faq" path="/faq" element={withLayout(FAQ)} />,
  <Route key="telecharger-app" path="/telecharger-app" element={withLayout(TelechargerApp)} />,
  <Route key="public-profile" path="/user/:userId" element={withLayout(PublicProfile)} />,
  <Route key="payment-success" path="/payment-success" element={withLayout(PaymentSuccess)} />,
  <Route key="payment-cancel" path="/payment-cancel" element={withLayout(PaymentCancel)} />,
  <Route key="search" path="/search" element={withLayout(SearchResultsPage)} />,
];

// Routes d'authentification et gestion de compte  
export const authRoutes = [
  // Redirection vers les pages avec captcha
  <Route key="auth" path="/auth" element={<Navigate to="/connexion" replace />} />,
  
  <Route key="dashboard" path="/dashboard" element={withLayout(UserDashboard)} />,
  <Route key="mes-annonces" path="/mes-annonces" element={withLayout(MyAnnouncements)} />,
  <Route key="mes-favoris" path="/mes-favoris" element={withLayout(FavoritesList)} />,
  <Route key="deposer-annonce" path="/deposer-annonce" element={withLayout(CreateAnnouncementComplete)} />,
  <Route key="messages" path="/messages" element={withLayout(Chat)} />,
  <Route key="reservations" path="/reservations" element={withLayout(BookingCalendar)} />,
  <Route key="mes-boutiques" path="/mes-boutiques" element={withLayout(MesBoutiques)} />,
  <Route key="creer-boutique" path="/creer-boutique" element={withLayout(CreateShopPage)} />,
  <Route key="je-recherche" path="/je-recherche" element={withLayout(RechercheProduit)} />,
  
];

// Routes utilisateur avec auth
export const userRoutes = [
  <Route key="inscription" path="/inscription" element={withLayout(Inscription)} />,
  <Route key="connexion" path="/connexion" element={withLayout(Connexion)} />,
  
  <Route key="parametres" path="/parametres" element={withLayout(Parametres)} />,
  <Route key="mot-de-passe-oublie" path="/mot-de-passe-oublie" element={withLayout(MotDePasseOublie)} />,
];

// Routes d'administration sans header
export const adminRoutes = [
  <Route key="admin" path="/admin/*" element={<AdminDashboard />} />,
];

// Route 404
export const notFoundRoute = <Route key="not-found" path="*" element={<NotFound />} />;