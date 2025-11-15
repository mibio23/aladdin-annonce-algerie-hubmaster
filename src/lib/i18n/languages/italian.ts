// Italian translations with specific overrides
import englishTranslations from './english';
import { navigationIt } from './italian/navigation';
import { italianFooter } from './italian/footer';
import { italianOurStory } from './italian/ourStory';
import { italianCommentCaMarche } from './italian/commentCaMarche';
import { italianContact } from './italian/contact';
import { italianActualites } from './italian/actualites';
import { italianCarrieres } from './italian/carrieres';
import { italianConditionsGenerales } from './italian/conditionsGenerales';
import { italianPolitiqueConfidentialite } from './italian/politiqueConfidentialite';
import { italianCookies } from './italian/cookies';
import { italianReport } from './italian/report';
import { italianSitemap } from './italian/sitemap';
import { italianMentionsLegales } from './italian/mentionsLegales';
import { italianSafety } from './italian/safety';
import { italianAuthentification } from './italian/authentification';
import { italianHelpCenter } from './italian/helpCenter';
import { italianPro } from './italian/pro';
import { italianFAQ } from './italian/faq';
import { italianSections } from './italian/sections';
import { italianProfile } from './italian/profile';
import { italianSettings } from './italian/settings';
import { italianUserMenu } from './italian/userMenu';
import { italianCreateAd } from './italian/createAd';
import { italianCreateShop } from './italian/createShop';

const italianTranslations = {
  ...englishTranslations,
  // Override navigation and menu keys with Italian
  ...navigationIt,
  // Footer translations (including description)
  ...italianFooter,
  // Our Story page translations
  ...italianOurStory,
  // Comment ça marche page translations
  ...italianCommentCaMarche,
  // Contact page translations
  ...italianContact,
  // Actualites page translations
  ...italianActualites,
  // Carrieres page translations
  ...italianCarrieres,
  // Conditions Générales page translations
  ...italianConditionsGenerales,
  // Politique de Confidentialité page translations
  ...italianPolitiqueConfidentialite,
  // Cookies page translations
  ...italianCookies,
  // Report page translations
  ...italianReport,
  // Sitemap page translations
  ...italianSitemap,
  // Mentions Legales page translations
  ...italianMentionsLegales,
  // Safety Tips page translations
  ...italianSafety,
  // Authentication page translations
  ...italianAuthentification,
  // Help Center page translations
  ...italianHelpCenter,
  // Business Pro page translations
  ...italianPro,
  // FAQ page translations
  ...italianFAQ,
  // Sections page translations
  ...italianSections,
  // Profile page translations
  ...italianProfile,
  // Settings page translations
  ...italianSettings,
  // User menu translations
  ...italianUserMenu,
  // Create Ad page translations
  ...italianCreateAd,
  // Create Shop page translations
  ...italianCreateShop,
  'hero.platformSubtitle': 'Piattaforma di annunci classificati in Algeria',
  'hero.description': 'Trova tutto ciò di cui hai bisogno, dalle auto agli smartphone, inclusi immobili e servizi',
  'banner.postAd': 'Pubblica un annuncio',
  'banner.createShop': 'Crea il tuo negozio',
  'banner.postSearch': 'Pubblica la tua offerta di lavoro',
  'announcements.viewAll': 'Visualizza tutti',
  // Messages page
  'messages.title': 'Messaggi',
  'messages.subtitle': 'Gestisci le tue conversazioni con venditori e acquirenti',
  'messages.conversations': 'Conversazioni',
  'messages.noConversations': 'Nessuna conversazione',
  'messages.noConversationsDesc': 'Non hai ancora conversazioni. Contatta un venditore per iniziare.',
  'messages.selectConversation': 'Seleziona una conversazione',
  'messages.selectConversationDesc': 'Scegli una conversazione dall’elenco per iniziare a chattare.',
  'messages.aboutAd': 'Informazioni sull’annuncio',
  'messages.typeMessage': 'Scrivi il tuo messaggio...',
  'messages.error': 'Errore',
  'messages.errorFetchingConversations': 'Impossibile caricare le conversazioni',
  'messages.errorFetchingMessages': 'Impossibile caricare i messaggi',
  'messages.errorSending': 'Impossibile inviare il messaggio',
  'messages.loginRequiredDesc': 'Devi essere connesso per accedere ai tuoi messaggi',
  // Login (Connexion)
  'connexion.title': 'Accedi',
  'connexion.subtitle': 'Accedi al tuo account Aladdin per gestire tutti i tuoi annunci',
  'connexion.email': 'Indirizzo email',
  'connexion.emailPlaceholder': 'la.tua.email@esempio.com',
  'connexion.password': 'Password',
  'connexion.passwordPlaceholder': 'Inserisci la tua password',
  'connexion.rememberMe': 'Ricordami',
  'connexion.forgotPassword': 'Password dimenticata?',
  'connexion.submit': 'Accedi',
  'connexion.or': 'oppure',
  'connexion.google': 'Continua con Google',
  'connexion.facebook': 'Continua con Facebook',
  'connexion.noAccount': 'Non hai un account?',
  'connexion.signupLink': 'Registrati',

  // Registration (Inscription)
  'inscription.title': 'Crea Account',
  'inscription.subtitle': 'Unisciti alla community di Aladdin e inizia a comprare e vendere',
  'inscription.firstName': 'Nome',
  'inscription.firstNamePlaceholder': 'Il tuo nome',
  'inscription.lastName': 'Cognome',
  'inscription.lastNamePlaceholder': 'Il tuo cognome',
  'inscription.email': 'Indirizzo email',
  'inscription.emailPlaceholder': 'la.tua.email@esempio.com',
  'inscription.phone': 'Telefono',
  'inscription.phonePlaceholder': '+213 XX XX XX XX',
  'inscription.password': 'Password',
  'inscription.passwordPlaceholder': 'Crea una password sicura',
  'inscription.confirmPassword': 'Conferma password',
  'inscription.confirmPasswordPlaceholder': 'Conferma la tua password',
  'inscription.gender': 'Genere',
  'inscription.male': 'Uomo',
  'inscription.female': 'Donna',
  'inscription.acceptTerms': 'Accetto i',
  'inscription.termsLink': 'termini di servizio',
  'inscription.acceptNewsletter': 'Voglio ricevere notizie e offerte speciali via email',
  'inscription.submit': 'Crea il mio account',
  'inscription.alreadyAccount': 'Hai già un account?',
  'inscription.loginLink': 'Accedi',

  // Forgot Password (MotDePasseOublie)
  'motDePasseOublie.title': 'Password dimenticata',
  'motDePasseOublie.subtitle': 'Inserisci il tuo indirizzo email per ricevere un link di reimpostazione',
  'motDePasseOublie.emailLabel': 'Indirizzo email',
  'motDePasseOublie.emailPlaceholder': 'la.tua.email@esempio.com',
  'motDePasseOublie.instructions': 'Ti invieremo un link sicuro per reimpostare la tua password.',
  'motDePasseOublie.sendButton': 'Invia link',
  'motDePasseOublie.sending': 'Invio in corso...',
  'motDePasseOublie.or': 'oppure',
  'motDePasseOublie.backToLogin': 'Torna al login',
  'motDePasseOublie.noAccount': 'Non hai un account?',
  'motDePasseOublie.signupLink': 'Registrati',
  'motDePasseOublie.securityTip': 'Suggerimenti di sicurezza',
  'motDePasseOublie.tip1': 'Usa una password unica e complessa',
  'motDePasseOublie.tip2': 'Abilita l’autenticazione a due fattori',
  'motDePasseOublie.tip3': 'Non condividere mai le tue credenziali',
  'motDePasseOublie.emailSent': 'Email inviata!',
  'motDePasseOublie.emailSentDesc': 'Abbiamo inviato un link di reimpostazione al tuo indirizzo email',
  'motDePasseOublie.checkEmail': 'Controlla la tua posta:',
  'motDePasseOublie.emailNotReceived': 'Non hai ricevuto l’email?',
  'motDePasseOublie.resendEmail': 'Reinvia email',
  'motDePasseOublie.error': 'Errore nell’invio dell’email',

  // Reset Password (ResetPassword)
  'resetPassword.title': 'Nuova Password',
  'resetPassword.subtitle': 'Scegli una nuova password sicura',
  'resetPassword.newPassword': 'Nuova password',
  'resetPassword.passwordPlaceholder': 'Inserisci la nuova password',
  'resetPassword.confirmPassword': 'Conferma password',
  'resetPassword.confirmPasswordPlaceholder': 'Conferma la tua password',
  'resetPassword.updateButton': 'Aggiorna',
  'resetPassword.updating': 'Aggiornamento in corso...',
  'resetPassword.loading': 'Caricamento...',
  'resetPassword.success': 'Password aggiornata con successo! Reindirizzamento...',
  'resetPassword.error': 'Errore nell’aggiornamento della password',
  'resetPassword.invalidLink': 'Link di reimpostazione non valido o scaduto',
  'resetPassword.backToLogin': 'Torna al login',

  // Captcha
  'captcha.title': 'Verifica di sicurezza',
  'captcha.instruction': 'Risolvi questo semplice calcolo:',
  'captcha.placeholder': 'Inserisci il risultato',
  'captcha.error': 'Risultato errato. Riprova.',
  'captcha.refresh': 'Nuovo calcolo',

  // Common
  backToHome: 'Torna alla Home',

  // Auth errors and success
  'auth.errors.loginFailed': 'Accesso fallito. Riprova.',
  'auth.errors.invalidCredentials': 'Email o password non validi.',
  'auth.errors.emailNotConfirmed': 'Conferma la tua email prima di accedere.',
  'auth.errors.oauthFailed': 'Accesso OAuth fallito',
  'auth.errors.passwordMismatch': 'Le password non corrispondono',
  'auth.errors.passwordTooShort': 'La password deve contenere almeno 6 caratteri',
  'auth.errors.acceptTerms': 'Devi accettare i termini di servizio',
  'auth.errors.signupFailed': 'Registrazione fallita. Riprova.',
  'auth.errors.userExists': 'Esiste già un utente con questa email',
  'auth.errors.invalidEmail': 'Indirizzo email non valido',
  'auth.success.loginSuccess': 'Accesso riuscito! Reindirizzamento...',
  'auth.success.signupSuccess': 'Registrazione riuscita! Controlla la tua email per confermare l’account.',
  'auth.continueWithGoogle': 'Continua con Google',
  'auth.continueWithFacebook': 'Continua con Facebook',
  'auth.orContinueWith': 'Oppure continua con',
  'auth.signIn': 'Accedi',
  'auth.alreadyAccount': 'Hai già un account?',
  'auth.errors.loginRequired': 'Devi essere connesso per pubblicare un’offerta',

  // Job Offer (Offerta di mestieri)
  'jobOffer.title': 'Pubblica la tua offerta di mestiere',
  'jobOffer.subtitle': 'Presenta le tue competenze e trova clienti nella tua zona',
  'jobOffer.offerTitle': 'Titolo dell’offerta',
  'jobOffer.offerTitlePlaceholder': 'Es: Idraulico esperto per riparazioni domestiche',
  'jobOffer.profession': 'Professione',
  'jobOffer.selectProfession': 'Seleziona una professione',
  'jobOffer.specialty': 'Specialità (opzionale)',
  'jobOffer.specialtyPlaceholder': 'Es: Climatizzazione, installazioni sanitarie…',
  'jobOffer.description': 'Descrizione dettagliata',
  'jobOffer.descriptionPlaceholder': 'Descrivi i servizi offerti, esperienza, disponibilità…',
  'jobOffer.workArea': 'Zona di intervento',
  'jobOffer.loadingLocation': 'Caricamento del selettore di posizione…',
  'jobOffer.wilaya': 'Wilaya',
  'jobOffer.selectWilaya': 'Seleziona una wilaya',
  'jobOffer.phoneNumbers': 'Numeri di telefono',
  'jobOffer.phoneNumbersDesc': 'Aggiungi fino a 3 numeri per essere contattato',
  'jobOffer.phoneNumber': 'Telefono {index}',
  'jobOffer.addPhoneNumber': 'Aggiungi un numero di telefono',
  'jobOffer.email': 'Email',
  'jobOffer.professionalInfo': 'Informazioni professionali',
  'jobOffer.experience': 'Esperienza',
  'jobOffer.selectExperience': 'Seleziona il livello di esperienza',
  'jobOffer.availability': 'Disponibilità',
  'jobOffer.selectAvailability': 'Seleziona la disponibilità',
  'jobOffer.rate': 'Tariffa (opzionale)',
  'jobOffer.ratePlaceholder': 'Es: 5000',
  'jobOffer.optionsCertifications': 'Opzioni e certificazioni',
  'jobOffer.graduateCertified': 'Diplomato / certificato',
  'jobOffer.qualified': 'Qualificato',
  'jobOffer.homeVisit': 'Interventi a domicilio',
  'jobOffer.emergencyAvailable': 'Disponibile per urgenze',
  'jobOffer.URGENT': 'URGENTE',
  'jobOffer.photos': 'Foto delle tue realizzazioni',
  'jobOffer.loadingUpload': 'Caricamento del componente di upload…',
  'jobOffer.expirationDate': 'Data di scadenza (opzionale)',
  'jobOffer.termsAcceptance': 'Pubblicando questa offerta accetti i nostri termini d’uso e ti impegni a fornire servizi professionali.',
  'jobOffer.publishOffer': 'Pubblica la mia offerta di mestiere',
  'jobOffer.offerPublishedSuccess': 'Offerta pubblicata con successo!',
  'jobOffer.offerPublishedDesc': 'La tua offerta di mestiere è stata pubblicata con successo',
  'jobOffer.error': 'Errore',
  'jobOffer.publishErrorDesc': 'Impossibile pubblicare l’offerta. Riprova.',
  'jobOffer.loadingError': 'Errore di caricamento',
  'jobOffer.loadingErrorDesc': 'Si è verificato un errore durante il caricamento del modulo. Riprova.',
  'jobOffer.refreshPage': 'Ricarica la pagina',
  'jobOffer.requiredFields': 'Campi obbligatori',
  'jobOffer.requiredFieldsDesc': 'Compila tutti i campi obbligatori, incluso almeno un numero di telefono',

  // Job Offer - Experience Levels
  'jobOffer.experienceLevels.beginner': 'Principiante (meno di 2 anni)',
  'jobOffer.experienceLevels.intermediate': 'Intermedio (2-5 anni)',
  'jobOffer.experienceLevels.confirmed': 'Confermato (5-10 anni)',
  'jobOffer.experienceLevels.expert': 'Esperto (oltre 10 anni)',

  // Job Offer - Availability
  'jobOffer.availability.fullTime': 'Tempo pieno',
  'jobOffer.availability.partTime': 'Part-time',
  'jobOffer.availability.weekend': 'Weekend',
  'jobOffer.availability.evenings': 'Sera',
  'jobOffer.availability.seasonal': 'Stagionale',
  'jobOffer.availability.occasional': 'Occasionale',

  // Job Offer - Professions
  'jobOffer.professions.plumber': 'Idraulico',
  'jobOffer.professions.electrician': 'Elettricista',
  'jobOffer.professions.mechanic': 'Meccanico',
  'jobOffer.professions.woodworker': 'Falegname',
  'jobOffer.professions.painter': 'Pittore',
  'jobOffer.professions.mason': 'Muratore',
  'jobOffer.professions.roofer': 'Copritetto',
  'jobOffer.professions.tiler': 'Piastrellista',
  'jobOffer.professions.gardener': 'Giardiniere',
  'jobOffer.professions.tailor': 'Sarto',
  'jobOffer.professions.cook': 'Cuoco',
  'jobOffer.professions.hairdresser': 'Parrucchiere',
  'jobOffer.professions.beautician': 'Estetista',
  'jobOffer.professions.computerTechnician': 'Tecnico informatico',
  'jobOffer.professions.heatingTechnician': 'Tecnico riscaldamento',
  'jobOffer.professions.applianceRepairman': 'Tecnico elettrodomestici',
  'jobOffer.professions.welder': 'Saldatore',
  'jobOffer.professions.ironworker': 'Fabbro',
  'jobOffer.professions.glazier': 'Vetraio',
  'jobOffer.professions.bodyworker': 'Carrozziere',
  'jobOffer.professions.cabinetmaker': 'Ebanista',
  'jobOffer.professions.upholsterer': 'Tappezziere',
  'jobOffer.professions.airConditioningTechnician': 'Tecnico climatizzazione',
  'jobOffer.professions.photographer': 'Fotografo',
  'jobOffer.professions.videographer': 'Videomaker',
  'jobOffer.professions.translator': 'Traduttore',
  'jobOffer.professions.secretary': 'Segretario',
  'jobOffer.professions.accountant': 'Contabile',
  'jobOffer.professions.privateTeacher': 'Insegnante privato',
};

export default italianTranslations;