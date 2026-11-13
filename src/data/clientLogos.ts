/**
 * Add a client only after verifying that their name/logo can be published.
 * Logos should be optimized local SVG/WebP assets in public/client-logos/.
 * Do not upload private dashboards, credentials, customer data or backoffice screenshots.
 */
export interface ClientLogo {
  id: string;
  name: string;
  logoSrc: string;
  website?: string;
  approvedForDisplay: boolean;
}

export const clientLogos: readonly ClientLogo[] = [];

export function getVisibleClientLogos(): ClientLogo[] {
  return clientLogos.filter(
    (client) => client.approvedForDisplay && client.name.trim() && client.logoSrc.trim()
  );
}
