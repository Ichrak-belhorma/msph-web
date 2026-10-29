import type { IconName } from '../components/Icon.astro';
import type { ImageKey } from './images';

interface SectorContent {
  title: string;
  short: string;
  challenge: string;
  solutions: string[];
  standards?: string;
}

export interface Sector {
  id: string;
  icon: IconName;
  image: ImageKey;
  fr: SectorContent;
  en: SectorContent;
}

export const sectors: Sector[] = [
  {
    id: 'restauration',
    icon: 'ChefHat',
    image: 'restaurantKitchen',
    fr: {
      title: 'Restauration & métiers de bouche',
      short: 'Restaurants, boulangeries, traiteurs, cuisines collectives.',
      challenge:
        'Une seule blatte ou une trace de rongeur lors d’un contrôle de la DDPP peut entraîner une fermeture administrative et nuire durablement à votre réputation.',
      solutions: [
        'Plan de lutte contre les nuisibles intégré à votre PMS / HACCP',
        'Passages en dehors des heures de service',
        'Gel anti-blattes et postes d’appâtage adaptés aux zones alimentaires',
        'Registre de traçabilité prêt pour les contrôles sanitaires',
      ],
      standards: 'Règlement (CE) 852/2004 · HACCP · Paquet hygiène',
    },
    en: {
      title: 'Food service',
      short: 'Restaurants, bakeries, caterers, catering kitchens.',
      challenge:
        'A single cockroach or sign of rodents during a health inspection can lead to closure and lasting damage to your reputation.',
      solutions: [
        'Pest control plan built into your HACCP food safety plan',
        'Visits outside service hours',
        'Cockroach gel and bait stations suited to food areas',
        'Traceability log ready for health inspections',
      ],
      standards: 'Regulation (EC) 852/2004 · HACCP',
    },
  },
  {
    id: 'agroalimentaire',
    icon: 'Factory',
    image: 'foodFactory',
    fr: {
      title: 'Industrie agroalimentaire',
      short: 'Sites de production, conditionnement, stockage de denrées.',
      challenge:
        'Les référentiels IFS, BRCGS et FSSC 22000 exigent un dispositif de maîtrise des nuisibles documenté, audité et piloté par des tendances.',
      solutions: [
        'Plan de maîtrise conforme IFS Food, BRCGS et FSSC 22000',
        'Cartographie des dispositifs (rongeurs, insectes rampants et volants)',
        'Pièges connectés et analyse de tendances',
        'Accompagnement lors de vos audits clients et de certification',
      ],
      standards: 'IFS Food · BRCGS · FSSC 22000 · NF EN 16636',
    },
    en: {
      title: 'Food manufacturing',
      short: 'Production, packing and food storage sites.',
      challenge:
        'IFS, BRCGS and FSSC 22000 standards require a documented, audited and trend-driven pest management system.',
      solutions: [
        'Pest management plan compliant with IFS Food, BRCGS and FSSC 22000',
        'Device mapping (rodents, crawling and flying insects)',
        'Connected traps and trend analysis',
        'Support during customer and certification audits',
      ],
      standards: 'IFS Food · BRCGS · FSSC 22000 · EN 16636',
    },
  },
  {
    id: 'hotellerie',
    icon: 'Hotel',
    image: 'hotelRoom',
    fr: {
      title: 'Hôtellerie & hébergement',
      short: 'Hôtels, résidences de tourisme, campings, auberges.',
      challenge:
        'Un avis client mentionnant des punaises de lit peut faire chuter vos réservations. La rapidité et la discrétion sont essentielles.',
      solutions: [
        'Inspections préventives des chambres',
        'Intervention en urgence pour limiter l’indisponibilité',
        'Véhicules banalisés et techniciens discrets',
        'Formation de vos équipes d’étage à la détection',
      ],
    },
    en: {
      title: 'Hotels & accommodation',
      short: 'Hotels, holiday residences, campsites, hostels.',
      challenge:
        'A single guest review mentioning bed bugs can hurt your bookings. Speed and discretion are essential.',
      solutions: [
        'Preventive room inspections',
        'Emergency call-outs to minimise room downtime',
        'Unmarked vehicles and discreet technicians',
        'Training for your housekeeping teams',
      ],
    },
  },
  {
    id: 'sante',
    icon: 'Hospital',
    image: 'hospital',
    fr: {
      title: 'Santé & médico-social',
      short: 'Cliniques, EHPAD, cabinets médicaux, laboratoires.',
      challenge:
        'Des publics fragiles, des contraintes d’hygiène renforcées et une activité continue qui ne peut pas être interrompue.',
      solutions: [
        'Méthodes à faible impact adaptées aux patients et résidents',
        'Désinfection et nébulisation avec produits normés',
        'Protocoles validés avec vos équipes d’hygiène (CLIN / EOH)',
        'Interventions planifiées sans perturber les soins',
      ],
    },
    en: {
      title: 'Healthcare & care homes',
      short: 'Clinics, care homes, medical practices, laboratories.',
      challenge: 'Vulnerable people, strict hygiene requirements and round-the-clock activity that cannot stop.',
      solutions: [
        'Low-impact methods suited to patients and residents',
        'Disinfection and fogging with certified products',
        'Protocols agreed with your infection control teams',
        'Scheduled visits that do not disrupt care',
      ],
    },
  },
  {
    id: 'logistique',
    icon: 'Warehouse',
    image: 'warehouse',
    fr: {
      title: 'Logistique & entrepôts',
      short: 'Plateformes logistiques, entrepôts, quais, zones de stockage.',
      challenge:
        'Les grandes surfaces, les flux de marchandises et les quais ouverts favorisent l’entrée des rongeurs et des oiseaux.',
      solutions: [
        'Ceinture de postes d’appâtage intérieure et extérieure',
        'Protection anti-oiseaux des quais et des structures',
        'Surveillance des insectes des denrées stockées',
        'Rapports multi-sites centralisés',
      ],
    },
    en: {
      title: 'Logistics & warehouses',
      short: 'Logistics hubs, warehouses, loading docks, storage areas.',
      challenge: 'Large areas, constant goods flows and open loading docks make it easy for rodents and birds to get in.',
      solutions: [
        'Internal and external bait station perimeters',
        'Bird proofing for docks and structures',
        'Monitoring of stored-product insects',
        'Centralised multi-site reporting',
      ],
    },
  },
  {
    id: 'habitat',
    icon: 'Building2',
    image: 'residentialBuilding',
    fr: {
      title: 'Syndics, bailleurs & copropriétés',
      short: 'Parties communes, caves, parkings, vide-ordures, logements.',
      challenge:
        'Les infestations se propagent d’un logement à l’autre : il faut traiter vite et de manière coordonnée, en informant les résidents.',
      solutions: [
        'Contrats annuels de dératisation et désinsectisation des parties communes',
        'Traitements coordonnés logement par logement',
        'Affichage et information des résidents',
        'Désinfection des vide-ordures et locaux poubelles',
      ],
      standards: 'Règlement sanitaire départemental',
    },
    en: {
      title: 'Property managers & landlords',
      short: 'Common areas, cellars, car parks, refuse chutes, flats.',
      challenge:
        'Infestations spread from one flat to the next: treatment must be fast and coordinated, with residents kept informed.',
      solutions: [
        'Annual rodent and insect control contracts for common areas',
        'Coordinated flat-by-flat treatments',
        'Notices and information for residents',
        'Disinfection of refuse chutes and bin rooms',
      ],
    },
  },
  {
    id: 'commerce',
    icon: 'Store',
    image: 'retail',
    fr: {
      title: 'Commerces & grande distribution',
      short: 'Supermarchés, magasins, centres commerciaux, réserves.',
      challenge:
        'Clients, marchandises et réserves : la moindre présence de nuisibles est visible et peut entraîner des pertes de stock importantes.',
      solutions: [
        'Contrats de prévention adaptés à chaque point de vente',
        'Interventions avant ouverture ou après fermeture',
        'Gestion des réserves et zones de déchets',
        'Interlocuteur unique pour vos réseaux de magasins',
      ],
    },
    en: {
      title: 'Retail & supermarkets',
      short: 'Supermarkets, shops, shopping centres, stockrooms.',
      challenge:
        'Customers, goods and stockrooms: the slightest sign of pests is visible and can lead to major stock losses.',
      solutions: [
        'Prevention contracts tailored to each store',
        'Visits before opening or after closing',
        'Management of stockrooms and waste areas',
        'A single point of contact for your store network',
      ],
    },
  },
  {
    id: 'tertiaire',
    icon: 'Landmark',
    image: 'office',
    fr: {
      title: 'Bureaux, collectivités & ERP',
      short: 'Sièges sociaux, écoles, administrations, équipements publics.',
      challenge:
        'Le bien-être des occupants et l’image de votre organisation exigent des locaux sains, sans perturber l’activité.',
      solutions: [
        'Contrats multi-services (nuisibles, désinfection, oiseaux)',
        'Réponse aux marchés publics et cahiers des charges',
        'Interventions planifiées hors présence du public',
        'Reporting régulier à vos services techniques',
      ],
    },
    en: {
      title: 'Offices, local authorities & public buildings',
      short: 'Head offices, schools, public administrations and facilities.',
      challenge:
        'Occupant well-being and your organisation’s image require healthy premises, without disrupting activity.',
      solutions: [
        'Multi-service contracts (pests, disinfection, birds)',
        'Responses to public tenders and specifications',
        'Scheduled visits when the public is not present',
        'Regular reporting to your technical departments',
      ],
    },
  },
];
