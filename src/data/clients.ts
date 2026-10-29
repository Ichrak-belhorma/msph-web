import type { IconName } from '../components/Icon.astro';

/**
 * Bandeau « Ils nous font confiance ».
 *
 * ⚠️ Emplacements provisoires (types de clients, pas de vraies marques).
 * Remplacez-les par les logos de vos clients — uniquement avec leur accord :
 * déposez le fichier dans /public/images/clients/ et renseignez `logo: '/images/clients/nom.svg'`.
 */
export interface Client {
  name: { fr: string; en: string };
  icon: IconName;
  logo?: string;
}

export const clients: Client[] = [
  { name: { fr: 'Groupe hôtelier', en: 'Hotel group' }, icon: 'Hotel' },
  { name: { fr: 'Restauration collective', en: 'Contract catering' }, icon: 'ChefHat' },
  { name: { fr: 'Bailleur social', en: 'Social landlord' }, icon: 'Building2' },
  { name: { fr: 'Clinique privée', en: 'Private clinic' }, icon: 'Hospital' },
  { name: { fr: 'Plateforme logistique', en: 'Logistics hub' }, icon: 'Warehouse' },
  { name: { fr: 'Industrie agroalimentaire', en: 'Food manufacturer' }, icon: 'Factory' },
  { name: { fr: 'Syndic de copropriété', en: 'Property manager' }, icon: 'KeyRound' },
  { name: { fr: 'Collectivité territoriale', en: 'Local authority' }, icon: 'Landmark' },
  { name: { fr: 'Enseigne de distribution', en: 'Retail chain' }, icon: 'Store' },
  { name: { fr: 'Résidence étudiante', en: 'Student residence' }, icon: 'GraduationCap' },
];
