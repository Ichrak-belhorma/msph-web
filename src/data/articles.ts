import type { ImageKey } from './images';
import type { RouteKey } from '../i18n/routes';

interface ArticleContent {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Corps de l'article en HTML simple. */
  body: string;
}

export interface Article {
  id: string;
  date: string;
  readingTime: number;
  image: ImageKey;
  related: RouteKey[];
  fr: ArticleContent;
  en: ArticleContent;
}

export const articles: Article[] = [
  {
    id: 'signes-rongeurs',
    date: '2026-09-15',
    readingTime: 5,
    image: 'mouse',
    related: ['service.rodents', 'business'],
    fr: {
      slug: 'signes-presence-rats-souris',
      title: 'Rats et souris : 7 signes qui doivent vous alerter',
      category: 'Rongeurs',
      excerpt:
        'Les rongeurs sont discrets et se reproduisent très vite. Voici les indices qui doivent vous pousser à agir sans attendre, à la maison comme dans vos locaux professionnels.',
      body: `
<p>Une souris peut donner naissance à plus de 50 petits par an, et un couple de rats à plusieurs centaines de descendants. Plus une infestation est détectée tôt, plus son traitement est rapide, simple et économique. Voici les sept signes à surveiller.</p>
<h2>1. Des crottes le long des murs</h2>
<p>C’est l’indice le plus fiable. Les crottes de souris mesurent 3 à 6 mm, celles du rat brun 1 à 2 cm. Fraîches, elles sont brillantes et molles ; anciennes, elles deviennent sèches et ternes. Leur quantité et leur répartition renseignent sur l’ampleur de l’infestation.</p>
<h2>2. Des traces de rongement</h2>
<p>Les rongeurs doivent user leurs incisives en permanence : emballages, sacs, plinthes, gaines électriques… Les câbles rongés représentent un vrai risque d’incendie.</p>
<h2>3. Des bruits la nuit</h2>
<p>Grattements dans les cloisons, les faux plafonds ou les combles, cavalcades au petit matin : les rongeurs sont principalement nocturnes.</p>
<h2>4. Des traces grasses</h2>
<p>Les rats empruntent toujours les mêmes chemins. Le frottement de leur pelage laisse des traînées sombres et grasses le long des murs et autour des ouvertures.</p>
<h2>5. Une odeur d’urine persistante</h2>
<p>Une odeur d’ammoniaque dans un local fermé, une réserve ou un vide sanitaire est souvent le signe d’une présence installée.</p>
<h2>6. Des nids et des terriers</h2>
<p>Papier déchiqueté, isolant arraché, tissus : les souris construisent leurs nids dans les endroits chauds et calmes. À l’extérieur, les rats creusent des terriers au pied des bâtiments.</p>
<h2>7. Le comportement des animaux domestiques</h2>
<p>Un chat ou un chien qui fixe un mur, gratte sous un meuble ou s’agite la nuit peut avoir repéré un rongeur.</p>
<h2>Que faire si vous repérez ces signes ?</h2>
<ul>
<li>Ne laissez aucune nourriture accessible et fermez hermétiquement vos contenants.</li>
<li>Évitez les produits grand public mal dosés : ils favorisent les résistances et peuvent être dangereux pour les enfants et les animaux.</li>
<li>Faites réaliser un diagnostic par un professionnel certifié, qui identifiera l’espèce, les points d’entrée et le traitement adapté.</li>
</ul>
<blockquote>Pour les professionnels de l’alimentation, la présence de rongeurs constatée lors d’un contrôle sanitaire peut entraîner une fermeture administrative. Un plan de lutte préventif est la meilleure assurance.</blockquote>
`,
    },
    en: {
      slug: 'signs-of-rats-and-mice',
      title: 'Rats and mice: 7 warning signs you should not ignore',
      category: 'Rodents',
      excerpt:
        'Rodents are discreet and breed very quickly. Here are the signs that should prompt you to act straight away, at home or on business premises.',
      body: `
<p>A mouse can produce more than 50 young a year, and a pair of rats several hundred descendants. The earlier an infestation is detected, the faster, simpler and cheaper it is to treat. Here are seven signs to watch for.</p>
<h2>1. Droppings along walls</h2>
<p>This is the most reliable sign. Mouse droppings are 3–6 mm long, brown rat droppings 1–2 cm. Fresh droppings are shiny and soft; older ones become dry and dull. Their quantity and spread show how large the infestation is.</p>
<h2>2. Gnaw marks</h2>
<p>Rodents constantly need to wear down their incisors: packaging, bags, skirting boards, cables… Gnawed cables are a real fire risk.</p>
<h2>3. Noises at night</h2>
<p>Scratching in walls, ceiling voids or lofts, scurrying in the early morning: rodents are mainly nocturnal.</p>
<h2>4. Greasy marks</h2>
<p>Rats always use the same routes. Their fur leaves dark, greasy smears along walls and around openings.</p>
<h2>5. A lingering smell of urine</h2>
<p>An ammonia smell in a closed room, storeroom or crawl space is often a sign of an established population.</p>
<h2>6. Nests and burrows</h2>
<p>Shredded paper, torn insulation, fabric: mice build nests in warm, quiet places. Outdoors, rats dig burrows at the base of buildings.</p>
<h2>7. Your pets’ behaviour</h2>
<p>A cat or dog staring at a wall, scratching under furniture or restless at night may have spotted a rodent.</p>
<h2>What should you do?</h2>
<ul>
<li>Leave no food accessible and use airtight containers.</li>
<li>Avoid poorly dosed consumer products: they encourage resistance and can be dangerous for children and pets.</li>
<li>Have a certified professional carry out an assessment to identify the species, entry points and the right treatment.</li>
</ul>
<blockquote>For food businesses, rodents found during a health inspection can lead to closure. A preventive pest control plan is the best insurance.</blockquote>
`,
    },
  },
  {
    id: 'punaises-de-lit',
    date: '2026-08-28',
    readingTime: 6,
    image: 'hotelRoom',
    related: ['service.bedbugs', 'residential'],
    fr: {
      slug: 'punaises-de-lit-detecter-et-agir',
      title: 'Punaises de lit : comment les détecter et que faire ?',
      category: 'Punaises de lit',
      excerpt:
        'Piqûres au réveil, petites taches noires sur le matelas… Apprenez à reconnaître une infestation de punaises de lit et les bons réflexes pour l’éliminer durablement.',
      body: `
<p>Les punaises de lit ne sont pas liées à un manque d’hygiène : elles voyagent dans les bagages, les meubles d’occasion et les vêtements. Hôtels, logements, résidences étudiantes, transports : personne n’est à l’abri.</p>
<h2>Reconnaître une punaise de lit</h2>
<p>L’adulte mesure 4 à 7 mm, a un corps plat et ovale de couleur brun-rouge. Il ne vole pas et ne saute pas. Il se cache le jour dans les coutures du matelas, le sommier, la tête de lit, les plinthes, derrière les cadres ou dans les prises électriques.</p>
<h2>Les signes d’une infestation</h2>
<ul>
<li>Des piqûres groupées ou alignées, souvent sur les bras, les jambes et le cou.</li>
<li>De petites taches noires (déjections) sur le matelas et le linge de lit.</li>
<li>Des traces de sang sur les draps.</li>
<li>Des mues (enveloppes vides) et des œufs blanchâtres dans les recoins.</li>
</ul>
<h2>Les bons réflexes</h2>
<ol>
<li><strong>Ne déplacez pas votre literie</strong> dans une autre pièce : vous risqueriez de propager l’infestation.</li>
<li><strong>Lavez votre linge à 60 °C</strong> minimum ou passez-le au sèche-linge 30 minutes à haute température.</li>
<li><strong>Passez l’aspirateur</strong> soigneusement, puis jetez le sac dans un sac fermé, à l’extérieur.</li>
<li><strong>Évitez les insecticides en bombe</strong> : les punaises y sont souvent résistantes et ils dispersent les foyers.</li>
<li><strong>Faites appel à un professionnel</strong> pour une inspection complète et un traitement combiné.</li>
</ol>
<h2>Comment se déroule un traitement professionnel ?</h2>
<p>Un traitement efficace associe plusieurs méthodes : inspection minutieuse, vapeur sèche à plus de 120 °C dans les zones refuges, traitement thermique ou par le froid, et application ciblée de biocides homologués. Un second passage 10 à 15 jours plus tard élimine les individus issus des œufs.</p>
<blockquote>Hôteliers et gestionnaires de résidences : une inspection préventive régulière permet de détecter une infestation avant qu’elle ne se propage et ne génère des avis négatifs.</blockquote>
`,
    },
    en: {
      slug: 'bed-bugs-how-to-detect-and-act',
      title: 'Bed bugs: how to spot them and what to do',
      category: 'Bed bugs',
      excerpt:
        'Bites on waking, small black spots on the mattress… Learn to recognise a bed bug infestation and the right steps to get rid of it for good.',
      body: `
<p>Bed bugs have nothing to do with poor hygiene: they travel in luggage, second-hand furniture and clothing. Hotels, homes, student halls, public transport: no one is immune.</p>
<h2>Recognising a bed bug</h2>
<p>Adults are 4–7 mm long, with a flat, oval, red-brown body. They cannot fly or jump. During the day they hide in mattress seams, bed bases, headboards, skirting boards, behind frames or in power sockets.</p>
<h2>Signs of an infestation</h2>
<ul>
<li>Clustered or lined-up bites, often on arms, legs and neck.</li>
<li>Small black spots (droppings) on the mattress and bedding.</li>
<li>Blood stains on sheets.</li>
<li>Shed skins and whitish eggs in crevices.</li>
</ul>
<h2>What to do</h2>
<ol>
<li><strong>Do not move your bedding</strong> to another room: you could spread the infestation.</li>
<li><strong>Wash your linen at 60 °C</strong> or more, or tumble dry for 30 minutes on high heat.</li>
<li><strong>Vacuum thoroughly</strong>, then dispose of the bag sealed in another bag, outdoors.</li>
<li><strong>Avoid aerosol insecticides</strong>: bed bugs are often resistant and sprays scatter them.</li>
<li><strong>Call a professional</strong> for a full inspection and a combined treatment.</li>
</ol>
<h2>How does a professional treatment work?</h2>
<p>Effective treatment combines several methods: thorough inspection, dry steam above 120 °C in hiding places, heat or cold treatment, and targeted application of approved biocides. A second visit 10 to 15 days later eliminates bugs hatching from eggs.</p>
<blockquote>Hoteliers and residence managers: regular preventive inspections detect infestations before they spread and lead to negative reviews.</blockquote>
`,
    },
  },
  {
    id: 'haccp-nuisibles',
    date: '2026-07-10',
    readingTime: 7,
    image: 'restaurantKitchen',
    related: ['business', 'service.insects'],
    fr: {
      slug: 'haccp-plan-lutte-nuisibles-restauration',
      title: 'HACCP : pourquoi un plan de lutte contre les nuisibles est indispensable en restauration',
      category: 'Professionnels',
      excerpt:
        'Contrôles de la DDPP, paquet hygiène, audits clients : ce que la réglementation impose aux métiers de bouche en matière de nuisibles, et comment être prêt le jour J.',
      body: `
<p>Dans un restaurant, une boulangerie ou une cuisine collective, la maîtrise des nuisibles fait partie intégrante du Plan de maîtrise sanitaire (PMS). Lors d’un contrôle, l’absence de mesures documentées peut à elle seule justifier une mise en demeure, voire une fermeture administrative.</p>
<h2>Ce que dit la réglementation</h2>
<p>Le règlement (CE) n° 852/2004 relatif à l’hygiène des denrées alimentaires impose aux exploitants de mettre en place des procédures adéquates pour lutter contre les organismes nuisibles. Les inspecteurs de la DDPP (ou DDETSPP) vérifient non seulement l’absence de nuisibles, mais aussi l’existence d’un dispositif de prévention et sa traçabilité.</p>
<h2>Les éléments d’un plan de lutte conforme</h2>
<table>
<thead><tr><th>Élément</th><th>Contenu attendu</th></tr></thead>
<tbody>
<tr><td>Contrat</td><td>Prestataire certifié, fréquence des visites, nuisibles couverts</td></tr>
<tr><td>Plan de pose</td><td>Emplacement numéroté de chaque dispositif (postes d’appâtage, pièges, désinsectiseurs)</td></tr>
<tr><td>Rapports d’intervention</td><td>Constats, consommations, actions réalisées, recommandations</td></tr>
<tr><td>Fiches techniques et FDS</td><td>Pour chaque produit utilisé</td></tr>
<tr><td>Actions correctives</td><td>Suivi des recommandations (obturations, hygiène, stockage)</td></tr>
</tbody>
</table>
<h2>Les nuisibles les plus fréquents en cuisine</h2>
<ul>
<li><strong>Les blattes germaniques</strong>, attirées par la chaleur et l’humidité des équipements.</li>
<li><strong>Les souris et les rats</strong>, qui entrent par les réseaux, les livraisons et les locaux poubelles.</li>
<li><strong>Les mouches</strong>, vecteurs de contamination, à maîtriser avec des désinsectiseurs adaptés.</li>
<li><strong>Les insectes des denrées</strong> (mites, charançons) dans les réserves sèches.</li>
</ul>
<h2>Nos conseils pour être prêt le jour du contrôle</h2>
<ol>
<li>Centralisez tous les documents dans un classeur ou un espace numérique accessible.</li>
<li>Vérifiez que les recommandations du dernier rapport ont bien été appliquées.</li>
<li>Formez vos équipes à signaler immédiatement tout indice de présence.</li>
<li>Faites intervenir votre prestataire en dehors des heures de service.</li>
</ol>
<blockquote>MSPH accompagne les professionnels des métiers de bouche avec des contrats conformes HACCP, des interventions hors service et un registre de traçabilité complet, prêt pour les contrôles.</blockquote>
`,
    },
    en: {
      slug: 'haccp-pest-control-plan-food-service',
      title: 'HACCP: why a pest control plan is essential in food service',
      category: 'Businesses',
      excerpt:
        'Health inspections, food hygiene rules, customer audits: what regulations require from food businesses regarding pests, and how to be ready on inspection day.',
      body: `
<p>In a restaurant, bakery or catering kitchen, pest management is an integral part of the food safety plan. During an inspection, the lack of documented measures alone can lead to a formal notice or even closure.</p>
<h2>What the regulations say</h2>
<p>Regulation (EC) No 852/2004 on the hygiene of foodstuffs requires food business operators to put in place adequate procedures to control pests. Inspectors check not only that there are no pests, but also that a prevention system exists and is traceable.</p>
<h2>What a compliant pest control plan includes</h2>
<table>
<thead><tr><th>Item</th><th>Expected content</th></tr></thead>
<tbody>
<tr><td>Contract</td><td>Certified provider, visit frequency, pests covered</td></tr>
<tr><td>Device map</td><td>Numbered location of each device (bait stations, traps, fly killers)</td></tr>
<tr><td>Service reports</td><td>Findings, bait consumption, actions taken, recommendations</td></tr>
<tr><td>Technical and safety data sheets</td><td>For every product used</td></tr>
<tr><td>Corrective actions</td><td>Follow-up of recommendations (proofing, hygiene, storage)</td></tr>
</tbody>
</table>
<h2>The most common pests in kitchens</h2>
<ul>
<li><strong>German cockroaches</strong>, attracted by the warmth and humidity of equipment.</li>
<li><strong>Mice and rats</strong>, entering via drains, deliveries and bin stores.</li>
<li><strong>Flies</strong>, contamination vectors, controlled with suitable fly killers.</li>
<li><strong>Stored-product insects</strong> (moths, weevils) in dry stores.</li>
</ul>
<h2>Our tips for inspection day</h2>
<ol>
<li>Keep all documents in one folder or accessible digital space.</li>
<li>Check that the recommendations from the last report have been implemented.</li>
<li>Train your teams to report any sign of pests immediately.</li>
<li>Have your provider visit outside service hours.</li>
</ol>
<blockquote>MSPH supports food businesses with HACCP-compliant contracts, out-of-hours visits and a complete traceability log, ready for inspections.</blockquote>
`,
    },
  },
];

export function sortedArticles(): Article[] {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date));
}
