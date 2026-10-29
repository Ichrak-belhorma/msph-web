import type { Lang } from '../i18n/routes';

interface FaqGroup {
  id: string;
  title: string;
  items: { q: string; a: string }[];
}

export const faqGroups: Record<Lang, FaqGroup[]> = {
  fr: [
    {
      id: 'general',
      title: 'Questions générales',
      items: [
        {
          q: 'Le diagnostic est-il vraiment gratuit ?',
          a: 'Oui. Le diagnostic et le devis sont gratuits et sans engagement, pour les professionnels comme pour les particuliers. Nous vous indiquons la nature du problème, la solution recommandée et son coût avant toute intervention.',
        },
        {
          q: 'Dans quels délais pouvez-vous intervenir ?',
          a: 'Nous intervenons généralement sous 24 à 48 h. Pour les situations urgentes (nid de frelons, infestation en cuisine, contrôle sanitaire imminent), nous mettons tout en œuvre pour intervenir le jour même, 7j/7.',
        },
        {
          q: 'Vos techniciens sont-ils certifiés ?',
          a: 'Oui. Tous nos techniciens détiennent le Certibiocide, obligatoire pour l’utilisation des produits biocides professionnels, et notre entreprise est certifiée CEPA selon la norme européenne NF EN 16636 par Bureau Veritas.',
        },
        {
          q: 'Les produits utilisés sont-ils dangereux ?',
          a: 'Nous privilégions la lutte intégrée : prévention, méthodes physiques et mécaniques, puis biocides homologués uniquement lorsque c’est nécessaire, en quantités maîtrisées et dans des dispositifs sécurisés. Vous recevez systématiquement les consignes de sécurité.',
        },
        {
          q: 'Vos interventions sont-elles garanties ?',
          a: 'Oui. Chaque intervention comprend un suivi et, selon la prestation, un ou plusieurs passages de contrôle. Si les nuisibles réapparaissent pendant la période de garantie, nous revenons sans frais supplémentaires.',
        },
      ],
    },
    {
      id: 'entreprises',
      title: 'Entreprises & collectivités',
      items: [
        {
          q: 'Un contrat de lutte contre les nuisibles est-il obligatoire ?',
          a: 'Pour les établissements du secteur alimentaire, le règlement (CE) n° 852/2004 impose des procédures de lutte contre les nuisibles. En pratique, un contrat avec un prestataire certifié est la façon la plus simple de démontrer votre conformité lors des contrôles sanitaires et des audits.',
        },
        {
          q: 'Que contient un contrat annuel ?',
          a: 'Un audit initial, un plan de maîtrise des nuisibles, la pose et l’entretien des dispositifs, des visites périodiques (de 4 à 12 par an selon le risque), des interventions curatives incluses et un registre complet : plans de pose, rapports, fiches de données de sécurité.',
        },
        {
          q: 'Pouvez-vous intervenir en dehors des heures d’ouverture ?',
          a: 'Oui. Nous intervenons tôt le matin, en soirée ou le week-end afin de ne jamais perturber votre activité ni votre clientèle.',
        },
        {
          q: 'Gérez-vous les entreprises multi-sites ?',
          a: 'Oui. Nous proposons un interlocuteur unique, une tarification harmonisée et un reporting consolidé pour l’ensemble de vos sites.',
        },
        {
          q: 'Répondez-vous aux appels d’offres publics ?',
          a: 'Oui, nous répondons aux marchés publics des collectivités, bailleurs sociaux et établissements publics. Contactez-nous pour recevoir notre dossier de références et nos attestations.',
        },
      ],
    },
    {
      id: 'particuliers',
      title: 'Particuliers',
      items: [
        {
          q: 'Dois-je être présent pendant l’intervention ?',
          a: 'Votre présence est nécessaire au début de l’intervention pour nous montrer les zones concernées. Selon le traitement, il peut ensuite vous être demandé de quitter le logement quelques heures.',
        },
        {
          q: 'Vos véhicules sont-ils banalisés ?',
          a: 'Oui, sur simple demande nous intervenons avec des véhicules banalisés, en toute discrétion vis-à-vis de votre voisinage.',
        },
        {
          q: 'Qui doit payer la dératisation : propriétaire ou locataire ?',
          a: 'En règle générale, les traitements des parties communes incombent au propriétaire ou au syndic. Dans un logement, la prise en charge dépend de l’origine de l’infestation et du bail. Nous pouvons vous conseiller selon votre situation.',
        },
      ],
    },
    {
      id: 'tarifs',
      title: 'Tarifs & paiement',
      items: [
        {
          q: 'Combien coûte une intervention ?',
          a: 'Le prix dépend du nuisible, de la surface, du niveau d’infestation et de l’accessibilité. C’est pourquoi nous réalisons un diagnostic gratuit et vous remettons un devis détaillé et ferme avant toute intervention, sans surprise.',
        },
        {
          q: 'Quels moyens de paiement acceptez-vous ?',
          a: 'Carte bancaire, virement et chèque. Pour les professionnels, nous proposons une facturation mensuelle, trimestrielle ou annuelle dans le cadre des contrats.',
        },
      ],
    },
  ],
  en: [
    {
      id: 'general',
      title: 'General questions',
      items: [
        {
          q: 'Is the assessment really free?',
          a: 'Yes. The assessment and quote are free with no commitment, for businesses and homeowners alike. We explain the problem, the recommended solution and its cost before any work begins.',
        },
        {
          q: 'How quickly can you come out?',
          a: 'We usually attend within 24 to 48 hours. For urgent situations (hornet nest, infestation in a kitchen, imminent health inspection) we do our best to come the same day, 7 days a week.',
        },
        {
          q: 'Are your technicians certified?',
          a: 'Yes. All our technicians hold the French Certibiocide certificate required to use professional biocides, and our company is CEPA certified to the European standard EN 16636 by Bureau Veritas.',
        },
        {
          q: 'Are the products you use dangerous?',
          a: 'We follow integrated pest management: prevention, physical and mechanical methods first, then approved biocides only when necessary, in controlled quantities and secure devices. You always receive safety instructions.',
        },
        {
          q: 'Are your treatments guaranteed?',
          a: 'Yes. Every treatment includes follow-up and, depending on the service, one or more follow-up visits. If pests return during the guarantee period, we come back at no extra cost.',
        },
      ],
    },
    {
      id: 'business',
      title: 'Businesses & public bodies',
      items: [
        {
          q: 'Is a pest control contract mandatory?',
          a: 'For food businesses, Regulation (EC) No 852/2004 requires pest control procedures. In practice, a contract with a certified provider is the easiest way to demonstrate compliance during inspections and audits.',
        },
        {
          q: 'What does an annual contract include?',
          a: 'An initial audit, a pest management plan, installation and maintenance of devices, periodic visits (4 to 12 a year depending on risk), included call-outs and a full log: device maps, reports and safety data sheets.',
        },
        {
          q: 'Can you work outside opening hours?',
          a: 'Yes. We work early mornings, evenings or weekends so we never disrupt your business or your customers.',
        },
        {
          q: 'Do you handle multi-site businesses?',
          a: 'Yes. We offer a single point of contact, harmonised pricing and consolidated reporting for all your sites.',
        },
        {
          q: 'Do you respond to public tenders?',
          a: 'Yes, we respond to tenders from local authorities, social landlords and public bodies. Contact us for our references and certificates.',
        },
      ],
    },
    {
      id: 'homeowners',
      title: 'Homeowners',
      items: [
        {
          q: 'Do I need to be present during the treatment?',
          a: 'You need to be there at the start to show us the affected areas. Depending on the treatment, you may then be asked to leave the property for a few hours.',
        },
        {
          q: 'Are your vehicles unmarked?',
          a: 'Yes, on request we use unmarked vehicles for complete discretion with your neighbours.',
        },
        {
          q: 'Who pays for rodent control: landlord or tenant?',
          a: 'As a rule, treatment of common areas is the responsibility of the owner or property manager. Inside a home, it depends on the cause of the infestation and the lease. We can advise you on your situation.',
        },
      ],
    },
    {
      id: 'pricing',
      title: 'Pricing & payment',
      items: [
        {
          q: 'How much does a treatment cost?',
          a: 'The price depends on the pest, the area, the level of infestation and access. That is why we carry out a free assessment and give you a detailed, fixed quote before any work, with no surprises.',
        },
        {
          q: 'Which payment methods do you accept?',
          a: 'Card, bank transfer and cheque. For businesses, we offer monthly, quarterly or annual invoicing under contract.',
        },
      ],
    },
  ],
};
