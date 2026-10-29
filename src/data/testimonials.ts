/**
 * ⚠️ AVIS D'EXEMPLE — À REMPLACER avant la mise en ligne par de vrais avis clients
 * (avec l'accord des clients), ou par le widget officiel Trustpilot (voir `site.trustpilot`),
 * ou désactiver la section via `showTestimonials`.
 * La publication de faux avis est interdite (art. L121-4 du Code de la consommation).
 */
export const showTestimonials = true;

export interface Review {
  name: string;
  context: { fr: string; en: string };
  rating: number;
  date: string;
  title: { fr: string; en: string };
  text: { fr: string; en: string };
}

export const testimonials: Review[] = [
  {
    name: 'Claire M.',
    context: { fr: 'Responsable qualité · Agroalimentaire', en: 'Quality manager · Food industry' },
    rating: 5,
    date: '2026-10-14',
    title: { fr: 'Audit IFS validé sans remarque', en: 'IFS audit passed with no remarks' },
    text: {
      fr: 'Plan de maîtrise des nuisibles irréprochable lors de notre dernier audit IFS. Rapports clairs, technicien ponctuel et toujours de bon conseil.',
      en: 'Our pest management plan was flawless at our last IFS audit. Clear reports, punctual technician, always good advice.',
    },
  },
  {
    name: 'Karim B.',
    context: { fr: 'Gérant · Restaurant', en: 'Owner · Restaurant' },
    rating: 5,
    date: '2026-10-09',
    title: { fr: 'Réactifs et discrets', en: 'Fast and discreet' },
    text: {
      fr: 'Intervention le lendemain de mon appel pour des blattes en cuisine. Deux passages, problème réglé, tout s’est fait en dehors du service.',
      en: 'They came the day after I called about cockroaches in the kitchen. Two visits, problem solved, all outside service hours.',
    },
  },
  {
    name: 'Isabelle D.',
    context: { fr: 'Gestionnaire · Syndic de copropriété', en: 'Manager · Property management' },
    rating: 5,
    date: '2026-09-30',
    title: { fr: 'Un vrai partenaire pour nos immeubles', en: 'A real partner for our buildings' },
    text: {
      fr: 'Dératisation des caves, information des résidents, compte rendu systématique. Très professionnel, je recommande.',
      en: 'Cellar rodent control, resident notices and a report every time. Very professional, I recommend them.',
    },
  },
  {
    name: 'Thomas R.',
    context: { fr: 'Particulier', en: 'Homeowner' },
    rating: 5,
    date: '2026-09-22',
    title: { fr: 'Nid de frelons retiré en une heure', en: 'Hornet nest removed within an hour' },
    text: {
      fr: 'Nid de frelons asiatiques sous la toiture : technicien sur place le jour même, travail propre et explications claires.',
      en: 'Asian hornet nest under the roof: technician on site the same day, clean work and clear explanations.',
    },
  },
  {
    name: 'Nathalie G.',
    context: { fr: 'Directrice · Hôtel', en: 'Manager · Hotel' },
    rating: 5,
    date: '2026-09-15',
    title: { fr: 'Punaises de lit éradiquées', en: 'Bed bugs eradicated' },
    text: {
      fr: 'Traitement des punaises de lit dans trois chambres, en toute discrétion pour nos clients. Aucune réapparition depuis.',
      en: 'Bed bug treatment in three rooms, completely discreet for our guests. No recurrence since.',
    },
  },
  {
    name: 'Julien P.',
    context: { fr: 'Responsable site · Logistique', en: 'Site manager · Logistics' },
    rating: 5,
    date: '2026-09-02',
    title: { fr: 'Suivi rigoureux de nos entrepôts', en: 'Rigorous monitoring of our warehouses' },
    text: {
      fr: 'Contrat annuel sur deux entrepôts : postes numérotés, rapports après chaque visite, interlocuteur unique. Exactement ce qu’il nous fallait.',
      en: 'Annual contract for two warehouses: numbered stations, a report after every visit, a single contact. Exactly what we needed.',
    },
  },
  {
    name: 'Sophie L.',
    context: { fr: 'Particulier', en: 'Homeowner' },
    rating: 5,
    date: '2026-08-27',
    title: { fr: 'Plus aucune souris', en: 'No more mice' },
    text: {
      fr: 'Devis clair par téléphone, intervention rapide et conseils pour boucher les accès. Plus aucune souris depuis deux mois.',
      en: 'Clear quote by phone, quick treatment and advice on sealing entry points. No mice for two months now.',
    },
  },
  {
    name: 'Marc V.',
    context: { fr: 'Directeur · EHPAD', en: 'Director · Care home' },
    rating: 4,
    date: '2026-08-18',
    title: { fr: 'Adaptés à nos résidents', en: 'Adapted to our residents' },
    text: {
      fr: 'Protocoles adaptés à un établissement de santé et interventions planifiées sans perturber les soins. Équipe à l’écoute.',
      en: 'Protocols suited to a care facility and visits scheduled without disrupting care. A team that listens.',
    },
  },
  {
    name: 'Aurélie T.',
    context: { fr: 'Gérante · Boulangerie', en: 'Owner · Bakery' },
    rating: 5,
    date: '2026-08-05',
    title: { fr: 'Prêts pour le contrôle sanitaire', en: 'Ready for the health inspection' },
    text: {
      fr: 'Registre de traçabilité complet et à jour : le contrôle de la DDPP s’est parfaitement passé. Merci à toute l’équipe.',
      en: 'Complete, up-to-date traceability log: the health inspection went perfectly. Thanks to the whole team.',
    },
  },
  {
    name: 'François K.',
    context: { fr: 'Services techniques · Mairie', en: 'Technical services · Town hall' },
    rating: 5,
    date: '2026-07-24',
    title: { fr: 'Dépigeonnisation réussie', en: 'Successful bird proofing' },
    text: {
      fr: 'Pose de filets et de pics sur le bâtiment de l’école, travail soigné et discret. Les pigeons ne reviennent plus.',
      en: 'Nets and spikes installed on the school building, neat and discreet work. The pigeons have stayed away.',
    },
  },
];
