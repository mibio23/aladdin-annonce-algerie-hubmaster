import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { Navigate } from "react-router-dom";

// Eager load only critical components for initial render
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

// Lazy load all other pages
const CategoryPage = React.lazy(() => import("@/pages/CategoryPage"));
const SubcategoryPage = React.lazy(() => import("@/pages/SubcategoryPage"));
const NotreHistoire = React.lazy(() => import("@/pages/NotreHistoire"));
const Carrieres = React.lazy(() => import("@/pages/Carrieres"));
const CommentCaMarche = React.lazy(() => import("@/pages/CommentCaMarche"));
const Contact = React.lazy(() => import("@/pages/Contact"));
const ConditionsGenerales = React.lazy(() => import("@/pages/ConditionsGenerales"));
const PolitiqueConfidentialite = React.lazy(() => import("@/pages/PolitiqueConfidentialite"));
const MentionsLegales = React.lazy(() => import("@/pages/MentionsLegales"));
const Authentification = React.lazy(() => import("@/pages/Authentification"));
const Actualites = React.lazy(() => import("@/pages/Actualites"));
const AdminDashboard = React.lazy(() => import("@/pages/admin/AdminDashboard"));
const GestionCookies = React.lazy(() => import("@/pages/GestionCookies"));
const SignalerContenu = React.lazy(() => import("@/pages/SignalerContenu"));
const ConseilsSecurite = React.lazy(() => import("@/pages/ConseilsSecurite"));
const EspacePro = React.lazy(() => import("@/pages/EspacePro"));
const CentreAide = React.lazy(() => import("@/pages/CentreAide"));
const PlanDuSite = React.lazy(() => import("@/pages/PlanDuSite"));
const FAQ = React.lazy(() => import("@/pages/FAQ"));
const Inscription = React.lazy(() => import("@/pages/Inscription"));
const Connexion = React.lazy(() => import("@/pages/Connexion"));
const Parametres = React.lazy(() => import("@/pages/Parametres"));
const MotDePasseOublie = React.lazy(() => import("@/pages/MotDePasseOublie"));
const AnnouncementDetailsPage = React.lazy(() => import("@/pages/AnnouncementDetailsPage"));
const ShopDetails = React.lazy(() => import("@/pages/ShopDetails"));
const TelechargerApp = React.lazy(() => import("@/pages/TelechargerApp"));
const PublicProfile = React.lazy(() => import("@/pages/PublicProfile"));
const PaymentSuccess = React.lazy(() => import("@/pages/PaymentSuccess"));
const PaymentCancel = React.lazy(() => import("@/pages/PaymentCancel"));
const FavoritesList = React.lazy(() => import("@/components/favorites/FavoritesList"));
const SearchResultsPage = React.lazy(() => import("@/pages/SearchResultsPage"));
const Chat = React.lazy(() => import("@/pages/Chat"));
const MyAnnouncements = React.lazy(() => import("@/pages/MyAnnouncements"));
const BookingCalendar = React.lazy(() => import("@/pages/BookingCalendar"));
const CreateAnnouncementComplete = React.lazy(() => import("@/pages/CreateAnnouncementComplete"));
const UserDashboard = React.lazy(() => import("@/components/dashboard/UserDashboard"));
const MesBoutiques = React.lazy(() => import("@/pages/MesBoutiques"));
const CreateShopPage = React.lazy(() => import("@/pages/CreateShopPage"));
const RechercheProduit = React.lazy(() => import("@/pages/RechercheProduit"));
const DeposerOffreMetier = React.lazy(() => import("@/pages/DeposerOffreMetier"));
const JobOfferMessages = React.lazy(() => import("@/pages/JobOfferMessages"));
const ShopMessages = React.lazy(() => import("@/pages/ShopMessages"));

// Suspense wrapper with loading fallback
const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={
    <div className="flex items-center justify-center min-h-[50vh]">
      <LoadingSpinner size="lg" />
    </div>
  }>
    {children}
  </Suspense>
);

// Helper to create a route with layout and suspense
const withLayout = (Component: React.ComponentType, showHeader: boolean = true) => (
  <AppLayout showHeader={showHeader}>
    <SuspenseWrapper>
      <Component />
    </SuspenseWrapper>
  </AppLayout>
);

// Helper for eager-loaded components (no suspense needed)
const withLayoutEager = (Component: React.ComponentType, showHeader: boolean = true) => (
  <AppLayout showHeader={showHeader}>
    <Component />
  </AppLayout>
);

// Routes publiques avec header
export const publicRoutes = [
  <Route key="home" path="/" element={withLayoutEager(Index)} />,
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
  <Route key="deposer-offre-metier" path="/deposer-offre-metier" element={withLayout(DeposerOffreMetier)} />,
  <Route key="offres-metiers-messages" path="/offres-metiers-messages" element={withLayout(JobOfferMessages)} />,
  <Route key="boutiques-messages" path="/boutiques-messages" element={withLayout(ShopMessages)} />,
];

// Routes utilisateur avec auth
export const userRoutes = [
  <Route key="inscription" path="/inscription" element={withLayout(Inscription)} />,
  <Route key="connexion" path="/connexion" element={withLayout(Connexion)} />,
  
  <Route key="parametres" path="/parametres" element={withLayout(Parametres)} />,
  <Route key="mot-de-passe-oublie" path="/mot-de-passe-oublie" element={withLayout(MotDePasseOublie)} />,
];

// Routes d'administration sans header - also lazy loaded
export const adminRoutes = [
  <Route key="admin" path="/admin/*" element={
    <SuspenseWrapper>
      <AdminDashboard />
    </SuspenseWrapper>
  } />,
];

// Route 404 - keep eager loaded
export const notFoundRoute = <Route key="not-found" path="*" element={<NotFound />} />;
