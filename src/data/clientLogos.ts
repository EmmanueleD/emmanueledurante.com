/** Client names supplied explicitly by the portfolio owner.
 * URLs were matched to public brand sites; the precise identity of "Welding"
 * remains to be confirmed, so no site is linked for it.
 *
 * Some logo images are referenced from public brand/retailer resources.
 * Replace these with permission-cleared local SVG/WebP assets before final
 * production publication; avoid long-term third-party image hotlinks.
 * Entries lacking logoSrc are rendered as text wordmarks, never fake logos.
 */
export interface ClientLogo {
  id: string;
  name: string;
  logoSrc?: string;
  website?: string;
}

export const clientLogos: readonly ClientLogo[] = [
  { id: 'diego-dalla-palma', name: 'Diego dalla Palma', website: 'https://diegodallapalma.com/', logoSrc: 'https://www.griffi.it/media/catalog/category/DIEGO-DALLA-PALMA.jpg',
  { id: 'mulac', name: 'Mulac', website: 'https://mulaccosmetics.com/', logoSrc: 'https://www.marisaprofumerie.it/cdn/shop/collections/Progetto_senza_titolo_25.png?v=1755089400',
  { id: 'rvb', name: 'RVB LAB', website: 'https://rvblab.com/', logoSrc: 'https://rvblab.com/cdn/shop/files/RVBLAB_Logo_1200_628px_positivo.png?v=1713368199',
  { id: 'officina-naturae', name: 'Officina Naturae', website: 'https://www.officinanaturae.com/it/', logoSrc: 'https://galaxy.al/wp-content/uploads/2024/08/officina.png',
  { id: 'mamata', name: 'Mamata', website: 'https://mamata.shop/',
  { id: 'scm', name: 'SCM Group', website: 'https://www.scmgroup.com/it', logoSrc: 'https://lamello.com/fileadmin/partners/logos/UNT_LOG_PAR_113-scm-group__SALL__AIN__V2.webp',
  { id: 'limpido-design', name: 'Limpido Design', website: 'https://www.limpidodesign.com/',
  { id: 'divani-store', name: 'Divani.Store', website: 'https://divani.store/',
  { id: 'korff', name: 'Korff', website: 'https://www.korff.it/',
  { id: 'welding', name: 'Welding',
  { id: 'camst', name: 'Camst', website: 'https://camstgroup.com/',
  { id: 'bonfiglioli', name: 'Bonfiglioli', website: 'https://www.bonfiglioli.com/italy/it/', logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Bonfiglioli_corporate_logo_color.jpg',
  { id: 'rimini-terme', name: 'Rimini Terme', website: 'https://riminiterme.com/',
  { id: 'il-lanificio', name: 'Il Lanificio', website: 'https://www.illanificio.com/', logoSrc: 'https://www.mcarthurglen.com/globalassets-v12/01-brands/il-lanificio/assets/il-lanificio-brand-logo-1080x1080.jpg',
  { id: 'akris', name: 'Akris', website: 'https://eu.akris.com/', logoSrc: 'https://cdn.shopify.com/s/files/1/0142/1685/5610/files/Akris_Logo_2.png?height=628&pad_color=ffffff&v=1614290508&width=1200',
];

export function getVisibleClientLogos(): ClientLogo[] {
  return clientLogos.filter((client) => client.name.trim().length > 0);
}
