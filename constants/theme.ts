/**
 * Design system BlaBlaCar.
 * Toutes les valeurs visuelles vivent ici : jamais de couleur en dur dans un écran.
 */

export const couleurs = {
  // Couleurs de marque
  action: '#0071EB',
  texteFort: '#001536',
  danger: '#C11417',
  succes: '#107046',

  // Neutres dérivés, utilisés pour les fonds et les textes secondaires
  fond: '#FFFFFF',
  fondSecondaire: '#F4F6F8',
  texteDoux: '#5A6B85',
  bordure: '#DDE3EC',
  surInverse: '#FFFFFF',
} as const;

export const rayons = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  pilule: 9999,
} as const;

export const espacements = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

/**
 * Police de marque. GT Eesti Pro Display est sous licence : tant que les
 * fichiers ne sont pas ajoutés au projet, on retombe sur Questrial puis sur
 * la police système.
 */
export const polices = {
  titre: 'GT Eesti Pro Display, Questrial, System',
  texte: 'GT Eesti Pro Display, Questrial, System',
} as const;

export const typographie = {
  titre: { fontSize: 28, fontWeight: '700' },
  sousTitre: { fontSize: 20, fontWeight: '600' },
  corps: { fontSize: 16, fontWeight: '400' },
  legende: { fontSize: 14, fontWeight: '400' },
} as const;

/** Hauteur des boutons imposée par le design system (bouton pilule). */
export const tailles = {
  hauteurBouton: 60,
  avatar: 48,
} as const;

export const theme = {
  couleurs,
  rayons,
  espacements,
  polices,
  typographie,
  tailles,
} as const;

export default theme;
