import type { IconName } from '../components/Icon.astro';
import type { ImageKey } from './images';
import type { RouteKey } from '../i18n/routes';

interface ServiceContent {
  title: string;
  menuLabel: string;
  short: string;
  heroTitle: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  targets: string[];
  signsTitle: string;
  signs: string[];
  methodTitle: string;
  method: { title: string; text: string }[];
  includedTitle: string;
  included: string[];
  b2b: string;
  faq: { q: string; a: string }[];
}

export interface Service {
  key: RouteKey;
  icon: IconName;
  image: ImageKey;
  detailImage: ImageKey;
  fr: ServiceContent;
  en: ServiceContent;
}

export const services: Service[] = [
  {
    key: 'service.rodents',
    icon: 'Rat',
    image: 'mouse',
    detailImage: 'inspection',
    fr: {
      title: 'Dératisation',
      menuLabel: 'Dératisation',
      short: 'Rats, souris et surmulots : élimination rapide et prévention durable par postes d’appâtage sécurisés.',
      heroTitle: 'Dératisation professionnelle : rats et souris éliminés durablement',
      intro:
        'Les rongeurs contaminent les denrées, dégradent les câbles et les isolants et transmettent de nombreuses maladies (leptospirose, salmonellose…). Nos techniciens certifiés identifient les points d’entrée, éliminent la population en place et mettent en œuvre un plan de prévention adapté à vos locaux.',
      metaTitle: 'Dératisation rats & souris — Entreprises et particuliers | MSPH',
      metaDescription:
        'Dératisation professionnelle par des techniciens certifiés CEPA / NF EN 16636 : diagnostic gratuit, postes d’appâtage sécurisés, rapports de traçabilité HACCP. Intervention sous 24 h.',
      targets: ['Rat brun (surmulot)', 'Rat noir', 'Souris domestique', 'Mulots et campagnols'],
      signsTitle: 'Les signes qui doivent vous alerter',
      signs: [
        'Crottes noires en forme de grain de riz le long des murs',
        'Emballages, sacs ou câbles rongés',
        'Bruits de grattement dans les cloisons ou faux plafonds, surtout la nuit',
        'Traces de passage grasses sur les plinthes et odeur d’urine persistante',
        'Terriers ou trous au pied des bâtiments et dans les espaces verts',
      ],
      methodTitle: 'Notre méthode de dératisation',
      method: [
        { title: 'Inspection & diagnostic', text: 'Identification de l’espèce, de l’ampleur de l’infestation, des zones de nidification et des points d’entrée.' },
        { title: 'Traitement ciblé', text: 'Pose de postes d’appâtage sécurisés et numérotés, pièges mécaniques ou connectés selon l’environnement (zones alimentaires, ERP…).' },
        { title: 'Proofing', text: 'Recommandations et travaux d’obturation (grilles, brosses de bas de porte, mousse anti-rongeurs) pour empêcher le retour des nuisibles.' },
        { title: 'Suivi & traçabilité', text: 'Visites de contrôle, plan de pose, relevés de consommation et rapport d’intervention remis après chaque passage.' },
      ],
      includedTitle: 'Inclus dans chaque intervention',
      included: [
        'Diagnostic et devis gratuits',
        'Produits homologués et postes d’appâtage inviolables',
        'Plan de pose des postes et rapport d’intervention',
        'Conseils de prévention personnalisés',
        'Passage de contrôle et garantie de résultat',
      ],
      b2b: 'Restaurants, industries agroalimentaires, entrepôts, copropriétés : nous mettons en place des contrats de dératisation périodique conformes aux exigences HACCP, IFS et BRC, avec registre de traçabilité.',
      faq: [
        { q: 'Combien de temps dure une dératisation ?', a: 'Le premier passage dure généralement de 30 minutes à 2 heures selon la surface. L’élimination complète d’une colonie demande en moyenne 2 à 4 semaines, avec un ou plusieurs passages de contrôle.' },
        { q: 'Les produits sont-ils dangereux pour les enfants et les animaux ?', a: 'Les appâts sont placés dans des postes sécurisés, fermés à clé et fixés, inaccessibles aux enfants et aux animaux domestiques. Nos techniciens adaptent les produits et les emplacements à chaque site.' },
        { q: 'La dératisation est-elle obligatoire pour les professionnels ?', a: 'Oui pour les établissements manipulant des denrées alimentaires : le règlement (CE) n° 852/2004 et la démarche HACCP imposent un plan de lutte contre les nuisibles documenté. Le Règlement sanitaire départemental impose aussi aux propriétaires de maintenir les locaux exempts de rongeurs.' },
      ],
    },
    en: {
      title: 'Rodent control',
      menuLabel: 'Rodent control',
      short: 'Rats and mice: fast elimination and lasting prevention with tamper-resistant bait stations.',
      heroTitle: 'Professional rodent control: rats and mice removed for good',
      intro:
        'Rodents contaminate food, damage cables and insulation and spread many diseases (leptospirosis, salmonellosis…). Our certified technicians locate entry points, eliminate the existing population and set up a prevention plan tailored to your premises.',
      metaTitle: 'Rat & mouse control — Businesses and homeowners | MSPH',
      metaDescription:
        'Professional rodent control by CEPA / EN 16636 certified technicians: free assessment, tamper-resistant bait stations, HACCP traceability reports. Response within 24 h.',
      targets: ['Brown rat (Norway rat)', 'Black rat', 'House mouse', 'Field mice and voles'],
      signsTitle: 'Warning signs to look out for',
      signs: [
        'Black, rice-shaped droppings along walls',
        'Gnawed packaging, bags or cables',
        'Scratching noises in walls or ceiling voids, especially at night',
        'Greasy rub marks on skirting boards and a lingering smell of urine',
        'Burrows or holes at the base of buildings and in green spaces',
      ],
      methodTitle: 'Our rodent control method',
      method: [
        { title: 'Inspection & assessment', text: 'We identify the species, the extent of the infestation, nesting areas and entry points.' },
        { title: 'Targeted treatment', text: 'Numbered, tamper-resistant bait stations, mechanical or connected traps depending on the environment (food areas, public buildings…).' },
        { title: 'Proofing', text: 'Recommendations and sealing work (grilles, door sweeps, rodent-proof foam) to stop pests from coming back.' },
        { title: 'Monitoring & traceability', text: 'Follow-up visits, bait station map, consumption records and a service report after every visit.' },
      ],
      includedTitle: 'Included with every treatment',
      included: [
        'Free assessment and quote',
        'Approved products and tamper-proof bait stations',
        'Bait station map and service report',
        'Tailored prevention advice',
        'Follow-up visit and results guarantee',
      ],
      b2b: 'Restaurants, food manufacturers, warehouses, residential buildings: we set up periodic rodent control contracts compliant with HACCP, IFS and BRC requirements, with a full traceability log.',
      faq: [
        { q: 'How long does rodent control take?', a: 'The first visit usually takes 30 minutes to 2 hours depending on the area. Fully eliminating a colony takes 2 to 4 weeks on average, with one or more follow-up visits.' },
        { q: 'Are the products dangerous for children and pets?', a: 'Baits are placed in secured, locked and fixed stations that children and pets cannot access. Our technicians adapt products and locations to each site.' },
        { q: 'Is rodent control mandatory for businesses?', a: 'Yes for food businesses: Regulation (EC) No 852/2004 and HACCP require a documented pest control plan. Local health regulations also require owners to keep premises free of rodents.' },
      ],
    },
  },
  {
    key: 'service.insects',
    icon: 'Bug',
    image: 'cockroach',
    detailImage: 'technicianSpray',
    fr: {
      title: 'Désinsectisation',
      menuLabel: 'Désinsectisation',
      short: 'Cafards, blattes, fourmis, puces, mites alimentaires : traitements ciblés par gel, pulvérisation ou nébulisation.',
      heroTitle: 'Désinsectisation : cafards, fourmis, puces et insectes rampants',
      intro:
        'Les insectes rampants et volants prolifèrent très vite dans les cuisines, les réserves et les locaux techniques. Nous choisissons la technique la plus adaptée (gel appât, pulvérisation localisée, nébulisation, lutte biologique) pour un résultat rapide, en limitant l’usage de biocides.',
      metaTitle: 'Désinsectisation cafards, blattes, fourmis, puces | MSPH',
      metaDescription:
        'Traitement anti-cafards, blattes, fourmis, puces et mites par des techniciens certifiés Certibiocide. Gel, pulvérisation, nébulisation. Diagnostic gratuit, intervention rapide.',
      targets: ['Cafards et blattes', 'Fourmis', 'Puces', 'Mites et insectes des denrées', 'Mouches', 'Poissons d’argent'],
      signsTitle: 'Comment repérer une infestation ?',
      signs: [
        'Insectes visibles la nuit autour des points d’eau et des appareils chauds',
        'Petites déjections noires ou traces brunes dans les recoins',
        'Oothèques (capsules d’œufs) derrière les meubles et les équipements',
        'Odeur âcre persistante dans les cuisines ou les réserves',
        'Denrées percées ou présence de larves dans les produits secs',
      ],
      methodTitle: 'Notre protocole de désinsectisation',
      method: [
        { title: 'Identification', text: 'Identification précise de l’espèce et des foyers : chaque insecte nécessite un traitement spécifique.' },
        { title: 'Traitement adapté', text: 'Gel appât, pulvérisation localisée, nébulisation ou poudrage selon l’espèce, l’activité et la sensibilité des lieux.' },
        { title: 'Prévention', text: 'Conseils d’hygiène, de stockage et d’étanchéité pour supprimer les conditions favorables.' },
        { title: 'Contrôle', text: 'Pièges de surveillance et visite de contrôle pour valider l’éradication.' },
      ],
      includedTitle: 'Inclus dans chaque intervention',
      included: [
        'Identification de l’espèce et des foyers',
        'Produits biocides homologués, appliqués par des techniciens Certibiocide',
        'Traitement compatible avec la reprise rapide de votre activité',
        'Rapport d’intervention et consignes de sécurité',
        'Visite de contrôle et garantie',
      ],
      b2b: 'Pour la restauration et l’agroalimentaire, nous intervenons en dehors des heures de service et fournissons les fiches de données de sécurité et rapports exigés lors des contrôles sanitaires.',
      faq: [
        { q: 'Faut-il quitter les lieux pendant le traitement ?', a: 'Pour un traitement au gel, non. Pour une pulvérisation ou une nébulisation, un délai de réintégration de quelques heures est nécessaire : votre technicien vous l’indique précisément.' },
        { q: 'Combien de passages faut-il pour éliminer les cafards ?', a: 'En général deux passages espacés de 2 à 3 semaines, afin de traiter les nouvelles générations issues des oothèques.' },
        { q: 'Les traitements sont-ils compatibles avec une cuisine professionnelle ?', a: 'Oui. Nous utilisons des produits et méthodes autorisés en zones alimentaires et vous remettons la documentation nécessaire pour votre plan HACCP.' },
      ],
    },
    en: {
      title: 'Insect control',
      menuLabel: 'Insect control',
      short: 'Cockroaches, ants, fleas, stored-product moths: targeted gel, spray or fogging treatments.',
      heroTitle: 'Insect control: cockroaches, ants, fleas and crawling insects',
      intro:
        'Crawling and flying insects multiply very quickly in kitchens, storerooms and plant rooms. We choose the most suitable technique (gel bait, targeted spraying, fogging, biological control) for fast results while limiting biocide use.',
      metaTitle: 'Cockroach, ant, flea & moth control | MSPH',
      metaDescription:
        'Cockroach, ant, flea and moth treatment by certified technicians. Gel, spraying, fogging. Free assessment, fast response.',
      targets: ['Cockroaches', 'Ants', 'Fleas', 'Moths and stored-product insects', 'Flies', 'Silverfish'],
      signsTitle: 'How to spot an infestation',
      signs: [
        'Insects seen at night around water points and warm appliances',
        'Small black droppings or brown marks in corners',
        'Egg cases behind furniture and equipment',
        'A persistent musty smell in kitchens or storerooms',
        'Pierced food packaging or larvae in dry goods',
      ],
      methodTitle: 'Our insect control protocol',
      method: [
        { title: 'Identification', text: 'Accurate identification of the species and hotspots: each insect needs a specific treatment.' },
        { title: 'Tailored treatment', text: 'Gel bait, targeted spraying, fogging or dusting depending on the species, your activity and the sensitivity of the premises.' },
        { title: 'Prevention', text: 'Hygiene, storage and proofing advice to remove favourable conditions.' },
        { title: 'Follow-up', text: 'Monitoring traps and a follow-up visit to confirm eradication.' },
      ],
      includedTitle: 'Included with every treatment',
      included: [
        'Identification of species and hotspots',
        'Approved biocides applied by certified technicians',
        'Treatment designed for a quick return to normal activity',
        'Service report and safety instructions',
        'Follow-up visit and guarantee',
      ],
      b2b: 'For food service and food manufacturing, we work outside service hours and provide the safety data sheets and reports required during health inspections.',
      faq: [
        { q: 'Do I need to leave the premises during treatment?', a: 'Not for a gel treatment. For spraying or fogging, you will need to stay out for a few hours: your technician will tell you exactly how long.' },
        { q: 'How many visits are needed to get rid of cockroaches?', a: 'Usually two visits 2 to 3 weeks apart, to treat the new generations hatching from egg cases.' },
        { q: 'Are treatments suitable for a professional kitchen?', a: 'Yes. We use products and methods approved for food areas and provide the documentation you need for your HACCP plan.' },
      ],
    },
  },
  {
    key: 'service.bedbugs',
    icon: 'BedDouble',
    image: 'hotelRoom',
    detailImage: 'technicianHome',
    fr: {
      title: 'Punaises de lit',
      menuLabel: 'Punaises de lit',
      short: 'Détection, traitement combiné (vapeur sèche, thermique, chimique) et suivi jusqu’à l’éradication complète.',
      heroTitle: 'Traitement des punaises de lit : une éradication complète et discrète',
      intro:
        'Les punaises de lit se cachent dans les coutures des matelas, les sommiers, les plinthes et les prises électriques. Leur élimination exige une méthode rigoureuse : nous combinons inspection minutieuse, traitement mécanique et thermique, et traitement biocide ciblé, avec un suivi jusqu’à disparition totale.',
      metaTitle: 'Traitement punaises de lit — Hôtels, logements, particuliers | MSPH',
      metaDescription:
        'Éradication des punaises de lit : inspection, vapeur sèche, traitement thermique et chimique, suivi garanti. Hôtels, résidences, bailleurs et particuliers. Intervention discrète.',
      targets: ['Logements et maisons', 'Hôtels et résidences', 'Foyers et résidences étudiantes', 'EHPAD et établissements de santé', 'Transports et cinémas'],
      signsTitle: 'Les signes d’une infestation',
      signs: [
        'Piqûres groupées ou alignées au réveil, souvent sur les bras et les jambes',
        'Petites taches noires (déjections) sur le matelas et les draps',
        'Traces de sang sur la literie',
        'Mues et insectes brun-rouge de 4 à 7 mm dans les coutures',
        'Odeur sucrée caractéristique en cas d’infestation importante',
      ],
      methodTitle: 'Notre protocole en 4 étapes',
      method: [
        { title: 'Inspection complète', text: 'Contrôle minutieux de la literie, du mobilier, des plinthes et des pièces voisines pour délimiter l’infestation.' },
        { title: 'Préparation', text: 'Nous vous remettons une fiche claire : lavage à 60 °C, mise en sacs, désencombrement.' },
        { title: 'Traitement combiné', text: 'Vapeur sèche à haute température, traitement thermique ou cryogénique et biocide ciblé selon la situation.' },
        { title: 'Second passage & contrôle', text: 'Deuxième traitement à 10–15 jours pour éliminer les éclosions, puis contrôle final.' },
      ],
      includedTitle: 'Inclus dans notre prestation',
      included: [
        'Inspection et diagnostic gratuits',
        'Protocole de préparation détaillé',
        'Deux passages de traitement',
        'Véhicules banalisés, intervention discrète',
        'Rapport et garantie de résultat',
      ],
      b2b: 'Hôteliers, bailleurs sociaux, gestionnaires de résidences : nous proposons des contrats d’inspection préventive et des interventions en urgence pour limiter l’indisponibilité des chambres.',
      faq: [
        { q: 'Peut-on éliminer les punaises de lit soi-même ?', a: 'C’est très difficile : les insecticides grand public sont souvent inefficaces (résistances) et peuvent disperser l’infestation. Un traitement professionnel combiné reste la solution la plus fiable.' },
        { q: 'Combien de temps dure le traitement ?', a: 'Comptez 2 à 4 heures par logement et par passage. Deux passages espacés de 10 à 15 jours sont généralement nécessaires.' },
        { q: 'Dois-je jeter mon matelas ?', a: 'Dans la grande majorité des cas, non. Le traitement à la vapeur sèche et l’utilisation d’une housse anti-punaises suffisent.' },
      ],
    },
    en: {
      title: 'Bed bugs',
      menuLabel: 'Bed bugs',
      short: 'Detection, combined treatment (dry steam, heat, chemical) and follow-up until complete eradication.',
      heroTitle: 'Bed bug treatment: complete and discreet eradication',
      intro:
        'Bed bugs hide in mattress seams, bed bases, skirting boards and power sockets. Getting rid of them requires a rigorous method: we combine thorough inspection, mechanical and heat treatment and targeted biocide treatment, with follow-up until they are completely gone.',
      metaTitle: 'Bed bug treatment — Hotels, housing, homeowners | MSPH',
      metaDescription:
        'Bed bug eradication: inspection, dry steam, heat and chemical treatment, guaranteed follow-up. Hotels, residences, landlords and homeowners. Discreet service.',
      targets: ['Homes and flats', 'Hotels and residences', 'Hostels and student halls', 'Care homes and healthcare facilities', 'Transport and cinemas'],
      signsTitle: 'Signs of an infestation',
      signs: [
        'Clustered or lined-up bites on waking, often on arms and legs',
        'Small black spots (droppings) on the mattress and sheets',
        'Blood stains on bedding',
        'Shed skins and red-brown 4–7 mm insects in seams',
        'A distinctive sweet smell in heavy infestations',
      ],
      methodTitle: 'Our 4-step protocol',
      method: [
        { title: 'Full inspection', text: 'Thorough check of bedding, furniture, skirting boards and adjacent rooms to map the infestation.' },
        { title: 'Preparation', text: 'We give you a clear checklist: washing at 60 °C, bagging, decluttering.' },
        { title: 'Combined treatment', text: 'High-temperature dry steam, heat or cryogenic treatment and targeted biocide depending on the situation.' },
        { title: 'Second visit & check', text: 'A second treatment 10–15 days later to eliminate hatchlings, then a final check.' },
      ],
      includedTitle: 'Included in our service',
      included: [
        'Free inspection and assessment',
        'Detailed preparation checklist',
        'Two treatment visits',
        'Unmarked vehicles, discreet service',
        'Report and results guarantee',
      ],
      b2b: 'Hoteliers, social landlords, residence managers: we offer preventive inspection contracts and emergency call-outs to minimise room downtime.',
      faq: [
        { q: 'Can I get rid of bed bugs myself?', a: 'It is very difficult: consumer insecticides are often ineffective (resistance) and can spread the infestation. A combined professional treatment remains the most reliable solution.' },
        { q: 'How long does treatment take?', a: 'Allow 2 to 4 hours per home per visit. Two visits 10 to 15 days apart are usually required.' },
        { q: 'Do I need to throw away my mattress?', a: 'In the vast majority of cases, no. Dry steam treatment and a bed bug-proof cover are enough.' },
      ],
    },
  },
  {
    key: 'service.wasps',
    icon: 'Hexagon',
    image: 'wasp',
    detailImage: 'outdoorSpray',
    fr: {
      title: 'Guêpes & frelons',
      menuLabel: 'Guêpes & frelons',
      short: 'Destruction sécurisée des nids de guêpes et de frelons asiatiques, y compris en hauteur.',
      heroTitle: 'Destruction de nids de guêpes et de frelons asiatiques',
      intro:
        'Un nid de guêpes ou de frelons à proximité d’un lieu de passage représente un danger réel, en particulier pour les personnes allergiques. Nos techniciens équipés interviennent rapidement pour neutraliser le nid en toute sécurité, y compris en hauteur ou dans des endroits difficiles d’accès.',
      metaTitle: 'Destruction nid de guêpes et frelons asiatiques | MSPH',
      metaDescription:
        'Destruction de nids de guêpes et frelons asiatiques en toute sécurité, intervention rapide 7j/7, matériel de travail en hauteur. Entreprises, collectivités et particuliers.',
      targets: ['Guêpes communes', 'Frelons européens', 'Frelons asiatiques', 'Nids en toiture, combles, arbres et haies'],
      signsTitle: 'Quand faire appel à nous ?',
      signs: [
        'Va-et-vient régulier d’insectes au même endroit (toiture, coffre de volet, haie)',
        'Nid visible en forme de boule grise ou beige',
        'Présence de frelons asiatiques à proximité de ruches ou d’habitations',
        'Nid situé près d’une entrée, d’une terrasse, d’une école ou d’un lieu public',
      ],
      methodTitle: 'Notre intervention',
      method: [
        { title: 'Localisation', text: 'Repérage du nid et évaluation de l’accès et des risques pour les occupants.' },
        { title: 'Sécurisation', text: 'Balisage de la zone et équipement de protection intégral du technicien.' },
        { title: 'Neutralisation', text: 'Injection d’un insecticide adapté directement dans le nid, au besoin avec perche télescopique.' },
        { title: 'Retrait', text: 'Retrait du nid lorsque c’est possible et conseils pour éviter une nouvelle installation.' },
      ],
      includedTitle: 'Notre engagement',
      included: [
        'Intervention rapide, 7j/7 en saison',
        'Matériel de travail en hauteur',
        'Équipements de protection professionnels',
        'Garantie de destruction du nid',
      ],
      b2b: 'Collectivités, écoles, campings, sites industriels : nous assurons la surveillance et la destruction des nids sur vos sites pendant toute la saison.',
      faq: [
        { q: 'Quand intervenir sur un nid de frelons asiatiques ?', a: 'Le plus tôt possible. Une intervention au printemps sur un nid primaire évite le développement d’une colonie de plusieurs milliers d’individus en été.' },
        { q: 'Les pompiers détruisent-ils les nids ?', a: 'Dans la plupart des départements, les pompiers n’interviennent plus que s’il y a un danger immédiat sur la voie publique. Pour un nid chez vous ou dans votre entreprise, il faut faire appel à un professionnel.' },
        { q: 'L’intervention est-elle dangereuse pour les abeilles ?', a: 'Nous identifions toujours l’espèce avant d’intervenir. Les abeilles sont protégées : en cas d’essaim, nous vous orientons vers un apiculteur.' },
      ],
    },
    en: {
      title: 'Wasps & hornets',
      menuLabel: 'Wasps & hornets',
      short: 'Safe removal of wasp and Asian hornet nests, including at height.',
      heroTitle: 'Wasp and Asian hornet nest removal',
      intro:
        'A wasp or hornet nest near a walkway is a real danger, especially for people with allergies. Our equipped technicians respond quickly to neutralise the nest safely, including at height or in hard-to-reach places.',
      metaTitle: 'Wasp and Asian hornet nest removal | MSPH',
      metaDescription:
        'Safe removal of wasp and Asian hornet nests, fast response 7 days a week, equipment for work at height. Businesses, local authorities and homeowners.',
      targets: ['Common wasps', 'European hornets', 'Asian hornets', 'Nests in roofs, lofts, trees and hedges'],
      signsTitle: 'When should you call us?',
      signs: [
        'Regular insect traffic at the same spot (roof, shutter box, hedge)',
        'A visible grey or beige ball-shaped nest',
        'Asian hornets near beehives or homes',
        'A nest near an entrance, terrace, school or public place',
      ],
      methodTitle: 'How we work',
      method: [
        { title: 'Location', text: 'We locate the nest and assess access and risks to occupants.' },
        { title: 'Safety', text: 'We cordon off the area; the technician wears full protective equipment.' },
        { title: 'Neutralisation', text: 'A suitable insecticide is injected directly into the nest, with a telescopic pole if needed.' },
        { title: 'Removal', text: 'The nest is removed where possible and we advise on preventing re-nesting.' },
      ],
      includedTitle: 'Our commitment',
      included: [
        'Fast response, 7 days a week in season',
        'Equipment for work at height',
        'Professional protective equipment',
        'Nest destruction guarantee',
      ],
      b2b: 'Local authorities, schools, campsites, industrial sites: we monitor and remove nests on your sites throughout the season.',
      faq: [
        { q: 'When should an Asian hornet nest be treated?', a: 'As early as possible. Treating a primary nest in spring prevents a colony of several thousand hornets from developing in summer.' },
        { q: 'Will the fire brigade remove nests?', a: 'In most areas, the fire brigade only intervenes when there is an immediate danger on public roads. For a nest at your home or business, you need a professional.' },
        { q: 'Is the treatment dangerous for bees?', a: 'We always identify the species before acting. Bees are protected: for a swarm, we refer you to a beekeeper.' },
      ],
    },
  },
  {
    key: 'service.birds',
    icon: 'Bird',
    image: 'pigeons',
    detailImage: 'pigeonsLedge',
    fr: {
      title: 'Dépigeonnisation',
      menuLabel: 'Dépigeonnisation',
      short: 'Filets, pics, fils tendus, effarouchement : protection durable et respectueuse des bâtiments.',
      heroTitle: 'Dépigeonnisation et lutte contre les oiseaux nuisibles',
      intro:
        'Les fientes de pigeons dégradent les façades et les toitures, obstruent les gouttières et présentent un risque sanitaire. Nous installons des dispositifs de protection durables et non létaux, adaptés à l’architecture de vos bâtiments, et assurons le nettoyage et la désinfection des zones souillées.',
      metaTitle: 'Dépigeonnisation : filets, pics, effarouchement | MSPH',
      metaDescription:
        'Solutions anti-pigeons durables : filets, pics, fils tendus, systèmes d’effarouchement, nettoyage et désinfection des fientes. Entreprises, copropriétés, collectivités.',
      targets: ['Pigeons', 'Goélands et mouettes', 'Étourneaux', 'Moineaux dans les entrepôts'],
      signsTitle: 'Les nuisances causées par les oiseaux',
      signs: [
        'Accumulation de fientes sur les rebords, balcons et toitures',
        'Gouttières et descentes d’eau obstruées',
        'Dégradation des façades, enseignes et équipements techniques',
        'Risques sanitaires (ornithose, salmonellose, parasites)',
        'Oiseaux nichant dans les entrepôts ou sous les auvents',
      ],
      methodTitle: 'Nos solutions',
      method: [
        { title: 'Audit du bâtiment', text: 'Analyse des zones de stationnement et de nidification, choix des dispositifs adaptés.' },
        { title: 'Nettoyage & désinfection', text: 'Retrait des fientes et des nids, désinfection des surfaces souillées.' },
        { title: 'Pose de dispositifs', text: 'Filets, pics, fils tendus, systèmes électro-répulsifs ou effarouchement, posés de façon discrète.' },
        { title: 'Maintenance', text: 'Contrôle périodique de l’efficacité et entretien des installations.' },
      ],
      includedTitle: 'Les avantages MSPH',
      included: [
        'Solutions non létales et respectueuses de la faune',
        'Pose discrète, respectueuse de l’architecture',
        'Travail en hauteur sécurisé (nacelle, cordiste)',
        'Garantie sur les installations',
      ],
      b2b: 'Copropriétés, bailleurs, sites industriels, entrepôts et collectivités : nous protégeons durablement vos bâtiments et vos marchandises.',
      faq: [
        { q: 'Les dispositifs anti-pigeons blessent-ils les oiseaux ?', a: 'Non. Les pics, filets et fils tendus empêchent les oiseaux de se poser sans les blesser. Nos solutions sont non létales.' },
        { q: 'Les installations sont-elles visibles ?', a: 'Nous choisissons des dispositifs discrets (filets transparents ou de la couleur de la façade, pics en polycarbonate) pour préserver l’esthétique du bâtiment.' },
        { q: 'Faut-il l’accord de la copropriété ?', a: 'Pour les parties communes et les façades, oui. Nous fournissons un devis détaillé et un descriptif technique à présenter en assemblée générale.' },
      ],
    },
    en: {
      title: 'Bird control',
      menuLabel: 'Bird control',
      short: 'Nets, spikes, tensioned wires, deterrents: lasting protection that respects your buildings.',
      heroTitle: 'Bird control and pigeon proofing',
      intro:
        'Pigeon droppings damage facades and roofs, block gutters and pose a health risk. We install lasting, non-lethal protection systems adapted to the architecture of your buildings, and clean and disinfect fouled areas.',
      metaTitle: 'Bird control: nets, spikes, deterrents | MSPH',
      metaDescription:
        'Lasting anti-pigeon solutions: nets, spikes, tensioned wires, deterrent systems, cleaning and disinfection of droppings. Businesses, residential buildings, local authorities.',
      targets: ['Pigeons', 'Gulls', 'Starlings', 'Sparrows in warehouses'],
      signsTitle: 'Problems caused by birds',
      signs: [
        'Build-up of droppings on ledges, balconies and roofs',
        'Blocked gutters and downpipes',
        'Damage to facades, signs and technical equipment',
        'Health risks (psittacosis, salmonellosis, parasites)',
        'Birds nesting in warehouses or under canopies',
      ],
      methodTitle: 'Our solutions',
      method: [
        { title: 'Building survey', text: 'Analysis of perching and nesting areas and selection of suitable systems.' },
        { title: 'Cleaning & disinfection', text: 'Removal of droppings and nests, disinfection of fouled surfaces.' },
        { title: 'Installation', text: 'Nets, spikes, tensioned wires, electric deterrents or scaring systems, discreetly installed.' },
        { title: 'Maintenance', text: 'Periodic effectiveness checks and maintenance of installations.' },
      ],
      includedTitle: 'Why MSPH',
      included: [
        'Non-lethal, wildlife-friendly solutions',
        'Discreet installation that respects the architecture',
        'Safe work at height (aerial platform, rope access)',
        'Guarantee on installations',
      ],
      b2b: 'Residential buildings, landlords, industrial sites, warehouses and local authorities: we protect your buildings and goods for the long term.',
      faq: [
        { q: 'Do anti-pigeon systems hurt the birds?', a: 'No. Spikes, nets and wires stop birds from landing without harming them. Our solutions are non-lethal.' },
        { q: 'Are the installations visible?', a: 'We choose discreet systems (transparent or facade-coloured nets, polycarbonate spikes) to preserve the look of the building.' },
        { q: 'Do I need the building owners’ approval?', a: 'For common areas and facades, yes. We provide a detailed quote and technical description to present at the owners’ meeting.' },
      ],
    },
  },
  {
    key: 'service.disinfection',
    icon: 'SprayCan',
    image: 'disinfectionTable',
    detailImage: 'disinfectionKitchen',
    fr: {
      title: 'Désinfection',
      menuLabel: 'Désinfection & assainissement',
      short: 'Désinfection des locaux, nébulisation, assainissement après sinistre et nettoyage technique.',
      heroTitle: 'Désinfection et assainissement des locaux professionnels et privés',
      intro:
        'Bactéries, virus, moisissures : certaines situations exigent une désinfection professionnelle, rapide et documentée. Nous intervenons par pulvérisation ou nébulisation de produits virucides et bactéricides normés, et réalisons l’assainissement complet des locaux après sinistre, décès ou insalubrité.',
      metaTitle: 'Désinfection des locaux et nébulisation | MSPH',
      metaDescription:
        'Désinfection professionnelle par nébulisation et pulvérisation : produits normés virucides et bactéricides, assainissement après sinistre, nettoyage technique. Entreprises, ERP, particuliers.',
      targets: ['Bureaux et ERP', 'Cuisines professionnelles', 'Établissements de santé', 'Véhicules et transports', 'Logements insalubres (syndrome de Diogène)', 'Gaines et vide-ordures'],
      signsTitle: 'Dans quels cas désinfecter ?',
      signs: [
        'Épidémie ou cas de maladie contagieuse dans vos locaux',
        'Après un dégât des eaux, une inondation ou un incendie',
        'Locaux insalubres, encombrés ou après un décès',
        'Présence de fientes, de cadavres d’animaux ou de déjections',
        'Exigences d’un audit qualité ou d’un contrôle sanitaire',
      ],
      methodTitle: 'Notre protocole',
      method: [
        { title: 'Évaluation', text: 'Analyse du risque et choix du protocole et des produits (normes EN 14476, EN 1276, EN 13697…).' },
        { title: 'Préparation', text: 'Nettoyage préalable, débarras et évacuation des déchets si nécessaire.' },
        { title: 'Désinfection', text: 'Pulvérisation des surfaces et/ou nébulisation de l’air et des volumes.' },
        { title: 'Certificat', text: 'Remise d’une attestation de désinfection précisant les produits et protocoles utilisés.' },
      ],
      includedTitle: 'Inclus dans notre prestation',
      included: [
        'Produits biocides normés et homologués',
        'Équipements de protection adaptés',
        'Attestation de désinfection',
        'Intervention rapide, y compris en urgence',
      ],
      b2b: 'Nous proposons des contrats de désinfection périodique pour les ERP, établissements de santé, transports et cuisines collectives.',
      faq: [
        { q: 'Combien de temps faut-il attendre avant de réintégrer les locaux ?', a: 'Selon le produit et le procédé, de 1 à 4 heures en général. Le délai exact figure sur l’attestation remise par le technicien.' },
        { q: 'Les produits laissent-ils des résidus ?', a: 'Nous utilisons des produits adaptés à chaque environnement, dont certains sans rinçage autorisés en contact alimentaire.' },
        { q: 'Intervenez-vous après un décès ou dans un logement insalubre ?', a: 'Oui, nous réalisons le débarras, le nettoyage, la désinfection et la désodorisation complète des lieux, avec discrétion.' },
      ],
    },
    en: {
      title: 'Disinfection',
      menuLabel: 'Disinfection & sanitisation',
      short: 'Premises disinfection, fogging, post-incident sanitisation and technical cleaning.',
      heroTitle: 'Disinfection and sanitisation of business and private premises',
      intro:
        'Bacteria, viruses, mould: some situations call for fast, documented professional disinfection. We use spraying or fogging with certified virucidal and bactericidal products, and carry out full sanitisation after incidents, deaths or unsanitary conditions.',
      metaTitle: 'Premises disinfection and fogging | MSPH',
      metaDescription:
        'Professional disinfection by fogging and spraying: certified virucidal and bactericidal products, post-incident sanitisation, technical cleaning. Businesses, public buildings, homeowners.',
      targets: ['Offices and public buildings', 'Professional kitchens', 'Healthcare facilities', 'Vehicles and transport', 'Unsanitary homes (hoarding)', 'Ducts and refuse chutes'],
      signsTitle: 'When is disinfection needed?',
      signs: [
        'An outbreak or contagious illness on your premises',
        'After water damage, flooding or fire',
        'Unsanitary or cluttered premises, or after a death',
        'Droppings, dead animals or excrement',
        'Requirements of a quality audit or health inspection',
      ],
      methodTitle: 'Our protocol',
      method: [
        { title: 'Assessment', text: 'Risk analysis and choice of protocol and products (EN 14476, EN 1276, EN 13697 standards…).' },
        { title: 'Preparation', text: 'Preliminary cleaning, clearance and waste removal if necessary.' },
        { title: 'Disinfection', text: 'Surface spraying and/or fogging of air and volumes.' },
        { title: 'Certificate', text: 'A disinfection certificate listing the products and protocols used.' },
      ],
      includedTitle: 'Included in our service',
      included: [
        'Certified and approved biocides',
        'Suitable protective equipment',
        'Disinfection certificate',
        'Fast response, including emergencies',
      ],
      b2b: 'We offer periodic disinfection contracts for public buildings, healthcare facilities, transport and catering kitchens.',
      faq: [
        { q: 'How long before we can go back into the premises?', a: 'Depending on the product and process, usually 1 to 4 hours. The exact time is shown on the certificate provided by the technician.' },
        { q: 'Do the products leave residues?', a: 'We use products suited to each environment, including no-rinse products approved for food contact.' },
        { q: 'Do you work after a death or in unsanitary homes?', a: 'Yes, we carry out full clearance, cleaning, disinfection and deodorisation, with discretion.' },
      ],
    },
  },
];

export function getService(key: RouteKey): Service | undefined {
  return services.find((s) => s.key === key);
}
