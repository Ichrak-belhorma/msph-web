/**
 * Registre des images du site.
 *
 * Images provisoires issues de Pexels (licence gratuite, usage commercial autorisé,
 * attribution facultative : https://www.pexels.com/fr-fr/licence/).
 *
 * Pour remplacer une image par une photo réelle de MSPH :
 *   1. déposez le fichier dans /public/images/ (ex. /public/images/equipe.jpg) ;
 *   2. renseignez `src: '/images/equipe.jpg'` sur l'entrée correspondante ci-dessous.
 * La propriété `src` est prioritaire sur `pexels`.
 */
export interface SiteImage {
  pexels?: number;
  src?: string;
  alt: { fr: string; en: string };
  credit?: string;
}

export const images = {
  hero: {
    pexels: 4176540,
    alt: {
      fr: 'Technicien en combinaison de protection réalisant une nébulisation dans des locaux',
      en: 'Technician in protective suit fogging a workplace',
    },
    credit: 'Matilda Wormwood / Pexels',
  },
  technicianSuit: {
    pexels: 4099468,
    alt: {
      fr: 'Technicien en combinaison de protection désinfectant des surfaces',
      en: 'Technician in protective suit disinfecting surfaces',
    },
    credit: 'Matilda Wormwood / Pexels',
  },
  technicianHome: {
    pexels: 4099260,
    alt: {
      fr: 'Intervention de désinfection dans un logement',
      en: 'Disinfection treatment inside a home',
    },
    credit: 'Matilda Wormwood / Pexels',
  },
  technicianSpray: {
    pexels: 4097848,
    alt: {
      fr: 'Technicien équipé d’EPI préparant un traitement',
      en: 'Technician wearing PPE preparing a treatment',
    },
    credit: 'Matilda Wormwood / Pexels',
  },
  disinfectionTable: {
    pexels: 4098787,
    alt: {
      fr: 'Désinfection d’un plan de travail par un technicien en tenue de protection',
      en: 'Technician in protective suit disinfecting a work surface',
    },
    credit: 'Matilda Wormwood / Pexels',
  },
  disinfectionKitchen: {
    pexels: 4099470,
    alt: {
      fr: 'Désinfection d’une cuisine',
      en: 'Kitchen disinfection',
    },
    credit: 'Matilda Wormwood / Pexels',
  },
  fogging: {
    pexels: 19789841,
    alt: {
      fr: 'Traitement par fumigation autour d’un bâtiment',
      en: 'Fogging treatment around a building',
    },
    credit: 'Garda Pest Control / Pexels',
  },
  outdoorSpray: {
    pexels: 16851694,
    alt: {
      fr: 'Technicien traitant l’extérieur d’un bâtiment',
      en: 'Technician treating the outside of a building',
    },
    credit: 'Pexels',
  },
  inspection: {
    pexels: 5532844,
    alt: {
      fr: 'Technicien remplissant une fiche d’inspection',
      en: 'Technician completing an inspection checklist',
    },
    credit: 'Pexels',
  },
  team: {
    pexels: 6195121,
    alt: {
      fr: 'L’équipe de techniciens en tenue de travail',
      en: 'Our team of technicians in uniform',
    },
    credit: 'Tima Miroshnichenko / Pexels',
  },
  teamWork: {
    pexels: 6195129,
    alt: {
      fr: 'Techniciens en combinaison de travail prêts à intervenir',
      en: 'Technicians in coveralls ready for a job',
    },
    credit: 'Tima Miroshnichenko / Pexels',
  },
  handshake: {
    pexels: 8837500,
    alt: {
      fr: 'Signature d’un contrat de prestation avec un client professionnel',
      en: 'Signing a service contract with a business client',
    },
    credit: 'ANTONI SHKRABA production / Pexels',
  },
  // Nuisibles
  mouse: {
    pexels: 9980945,
    alt: { fr: 'Souris domestique sur un sol en béton', en: 'House mouse on a concrete floor' },
    credit: 'Pexels',
  },
  rat: {
    pexels: 2189599,
    alt: { fr: 'Rat brun (surmulot)', en: 'Brown rat' },
    credit: 'Pexels',
  },
  cockroach: {
    pexels: 31661042,
    alt: { fr: 'Blatte germanique en gros plan', en: 'German cockroach close-up' },
    credit: 'Erik Karits / Pexels',
  },
  wasp: {
    pexels: 33338703,
    alt: { fr: 'Guêpe sur son nid', en: 'Wasp on its nest' },
    credit: 'Dmytro Koplyk / Pexels',
  },
  pigeons: {
    pexels: 16891333,
    alt: { fr: 'Pigeons installés sur un toit', en: 'Pigeons sitting on a roof' },
    credit: 'Selim Karadayı / Pexels',
  },
  pigeonsLedge: {
    pexels: 11317178,
    alt: { fr: 'Pigeons sur le rebord d’un bâtiment', en: 'Pigeons on a building ledge' },
    credit: 'Ellie Burgin / Pexels',
  },
  hotelRoom: {
    pexels: 15273732,
    alt: { fr: 'Chambre d’hôtel au linge blanc', en: 'Hotel room with white bedding' },
    credit: 'Magda Ehlers / Pexels',
  },
  // Secteurs
  restaurantKitchen: {
    pexels: 15753262,
    alt: { fr: 'Brigade en cuisine professionnelle', en: 'Chefs working in a professional kitchen' },
    credit: 'Pexels',
  },
  foodFactory: {
    pexels: 5953794,
    alt: {
      fr: 'Opératrice en tenue d’hygiène dans une usine agroalimentaire',
      en: 'Operator in hygiene clothing in a food factory',
    },
    credit: 'Anna Shvets / Pexels',
  },
  warehouse: {
    pexels: 4481327,
    alt: { fr: 'Rayonnages d’un entrepôt logistique', en: 'Shelving in a logistics warehouse' },
    credit: 'Tiger Lily / Pexels',
  },
  hospital: {
    pexels: 6234630,
    alt: { fr: 'Couloir d’établissement de santé', en: 'Healthcare facility corridor' },
    credit: 'Pexels',
  },
  residentialBuilding: {
    pexels: 11299684,
    alt: { fr: 'Immeuble résidentiel en France', en: 'Residential building in France' },
    credit: 'Mathias Reding / Pexels',
  },
  office: {
    pexels: 33643675,
    alt: { fr: 'Immeuble de bureaux moderne', en: 'Modern office building' },
    credit: 'Jan van der Wolf / Pexels',
  },
  retail: {
    pexels: 30625283,
    alt: { fr: 'Surface de stockage d’un commerce', en: 'Retail storage area' },
    credit: 'Masi / Pexels',
  },
  publicBuilding: {
    pexels: 6234630,
    alt: { fr: 'Établissement recevant du public', en: 'Public building' },
    credit: 'Pexels',
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;

/** URL d'une image à une largeur donnée. */
export function imageUrl(img: SiteImage, width = 1200): string {
  if (img.src) return img.src;
  return `https://images.pexels.com/photos/${img.pexels}/pexels-photo-${img.pexels}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

export function imageSrcset(img: SiteImage, widths = [480, 800, 1200, 1600]): string | undefined {
  if (img.src) return undefined;
  return widths.map((w) => `${imageUrl(img, w)} ${w}w`).join(', ');
}
