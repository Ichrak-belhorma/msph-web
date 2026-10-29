export const languages = { fr: 'Français', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';
export const locales: Record<Lang, string> = { fr: 'fr-FR', en: 'en-GB' };

/** Table des routes : une clé unique par page, un chemin par langue. */
export const routes = {
  home: { fr: '/', en: '/en/' },
  services: { fr: '/services/', en: '/en/services/' },
  'service.rodents': { fr: '/services/deratisation/', en: '/en/services/rodent-control/' },
  'service.insects': { fr: '/services/desinsectisation/', en: '/en/services/insect-control/' },
  'service.bedbugs': { fr: '/services/punaises-de-lit/', en: '/en/services/bed-bugs/' },
  'service.wasps': { fr: '/services/guepes-frelons/', en: '/en/services/wasps-hornets/' },
  'service.birds': { fr: '/services/depigeonnisation/', en: '/en/services/bird-control/' },
  'service.disinfection': { fr: '/services/desinfection/', en: '/en/services/disinfection/' },
  business: { fr: '/entreprises/', en: '/en/business/' },
  sectors: { fr: '/secteurs/', en: '/en/industries/' },
  residential: { fr: '/particuliers/', en: '/en/residential/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  certifications: { fr: '/certifications/', en: '/en/certifications/' },
  faq: { fr: '/faq/', en: '/en/faq/' },
  blog: { fr: '/conseils/', en: '/en/insights/' },
  careers: { fr: '/recrutement/', en: '/en/careers/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  quote: { fr: '/devis-gratuit/', en: '/en/free-quote/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/' },
} as const;

export type RouteKey = keyof typeof routes;

export function path(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

/** Chemin d'un article de blog. */
export function articlePath(slug: string, lang: Lang): string {
  return `${routes.blog[lang]}${slug}/`;
}

export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/en/') || url.pathname === '/en' ? 'en' : 'fr';
}
