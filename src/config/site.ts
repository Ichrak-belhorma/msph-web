/**
 * Configuration centrale du site MSPH — MS Pro Hygiène.
 *
 * ⚠️ Les valeurs marquées « À CONFIRMER » sont des valeurs provisoires :
 * remplacez-les par les informations officielles de l'entreprise avant la mise en ligne.
 */
export const site = {
  name: 'MSPH',
  legalName: 'MS PRO HYGIENE', // À CONFIRMER (raison sociale exacte, Kbis)
  brand: 'MS Pro Hygiène',
  url: 'https://www.msprohygiene.fr', // À CONFIRMER (nom de domaine)

  contact: {
    phone: '01 23 45 67 89', // À CONFIRMER
    phoneIntl: '+33123456789', // À CONFIRMER (même numéro au format international)
    emergencyPhone: '01 23 45 67 89', // À CONFIRMER (ligne d'urgence, peut être identique)
    email: 'contact@msprohygiene.fr', // À CONFIRMER
    careersEmail: 'recrutement@msprohygiene.fr', // À CONFIRMER
    // Numéro WhatsApp au format international sans « + » ni espaces (ex. 33612345678). Laisser vide pour masquer.
    whatsapp: '',
  },

  address: {
    street: '12 rue de l’Exemple', // À CONFIRMER
    postalCode: '75000', // À CONFIRMER
    city: 'Paris', // À CONFIRMER
    country: 'France',
    // Coordonnées GPS du siège (pour la carte et le référencement local). Laisser à null pour masquer la carte.
    geo: null as null | { lat: number; lng: number },
  },

  // Départements / zones couverts — À CONFIRMER
  serviceAreas: [
    'Paris (75)',
    'Hauts-de-Seine (92)',
    'Seine-Saint-Denis (93)',
    'Val-de-Marne (94)',
    'Yvelines (78)',
    'Essonne (91)',
    'Val-d’Oise (95)',
    'Seine-et-Marne (77)',
  ],

  hours: {
    fr: [
      { days: 'Lundi – Vendredi', time: '8h00 – 19h00' },
      { days: 'Samedi', time: '9h00 – 17h00' },
      { days: 'Urgences', time: '7j/7 sur appel' },
    ],
    en: [
      { days: 'Monday – Friday', time: '8:00 am – 7:00 pm' },
      { days: 'Saturday', time: '9:00 am – 5:00 pm' },
      { days: 'Emergencies', time: '7 days a week, on call' },
    ],
  },

  legal: {
    form: 'SARL', // À CONFIRMER
    capital: '— €', // À CONFIRMER
    siren: '000 000 000', // À CONFIRMER
    siret: '000 000 000 00000', // À CONFIRMER
    rcs: 'RCS — 000 000 000', // À CONFIRMER
    vat: 'FR00 000000000', // À CONFIRMER
    director: '— (Gérant)', // À CONFIRMER
    certibiocide: 'N° d’agrément — à compléter', // À CONFIRMER (agrément ministériel Certibiocide de l'entreprise)
    insurer: 'Assurance RC Professionnelle — à compléter', // À CONFIRMER
    host: 'Nom de l’hébergeur — adresse — téléphone', // À CONFIRMER
  },

  social: {
    linkedin: '', // ex. https://www.linkedin.com/company/...
    facebook: '',
    instagram: '',
    google: '', // lien fiche Google Business Profile
  },

  /**
   * Envoi des formulaires.
   * - Laissez `endpoint` vide : le formulaire ouvre la messagerie du visiteur avec un e-mail pré-rempli (solution de secours).
   * - Recommandé : créez un formulaire gratuit sur https://formspree.io ou https://web3forms.com
   *   et collez ici l'URL d'envoi (ex. https://formspree.io/f/abcdwxyz).
   * - Web3Forms : renseignez aussi `accessKey`.
   */
  form: {
    endpoint: '',
    accessKey: '',
  },

  /** Chiffres clés affichés sur le site (page d'accueil, à propos). */
  proof: {
    experienceYears: 30,
    satisfiedClients: 2500, // À CONFIRMER
    satisfactionRate: 98, // À CONFIRMER (en %)
  },

  /**
   * Avis Trustpilot.
   * - `rating` et `reviewCount` alimentent le bandeau d'avis (À CONFIRMER avec la note réelle).
   * - `url` : lien vers votre page Trustpilot (ex. https://fr.trustpilot.com/review/votre-domaine.fr).
   * - Pour afficher le widget officiel TrustBox à la place des avis du site, renseignez `businessUnitId`
   *   (fourni par Trustpilot) ; `templateId` correspond par défaut au modèle « Carousel ».
   */
  trustpilot: {
    rating: 4.9, // À CONFIRMER
    reviewCount: 320, // À CONFIRMER
    url: '', // À CONFIRMER
    businessUnitId: '',
    templateId: '53aa8912dec7e10d38f59f36',
  },
};

export type Site = typeof site;
