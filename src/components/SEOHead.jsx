import { Helmet } from 'react-helmet-async';

const DOMAIN = import.meta.env.VITE_SITE_URL || 'https://netfusionideal.com';
const SITE_NAME = 'NETFUSION';
const DEFAULT_OG_IMAGE = `${DOMAIN}/logos/Netfusion-logo.jpg`;

/**
 * Reusable SEO head component.
 *
 * @param {string}  title        – Page title (≤ 60 chars recommended)
 * @param {string}  description  – Meta description (≤ 155 chars recommended)
 * @param {string}  path         – Route path, e.g. "/about" (used for canonical + og:url)
 * @param {string}  [ogImage]    – Absolute URL to the OG image (defaults to logo)
 * @param {string}  [ogType]     – Open Graph type (defaults to "website")
 * @param {Array}   [jsonLd]     – Array of JSON-LD objects to inject as <script> tags
 */
export default function SEOHead({
  title,
  description,
  path = '/',
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd = [],
}) {
  const canonical = `${DOMAIN}${path === '/' ? '' : path}`;

  return (
    <Helmet>
      {/* Core */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@allfincbanking" />

      {/* JSON-LD structured data */}
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

/* ── Shared schema builders ─────────────────────────────────── */

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NETFUSION Ideal & Innovations Solutions Ltd',
  url: DOMAIN,
  logo: `${DOMAIN}/logos/Netfusion-logo.jpg`,
  email: 'info@netfusionideal.com',
  telephone: '+234-704-551-2215',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '46 Akinsoji St, Fadeyi',
    addressLocality: 'Lagos',
    postalCode: '100252',
    addressCountry: 'NG',
  },
  sameAs: [
    'https://www.linkedin.com/company/netfusionideal/',
    'https://x.com/netfusionltd',
    'https://www.facebook.com/profile.php?id=61575661177421&__cft__[0]=AZZwawANi5DF3VJ_TuSDT5BQ3YL3L82YTJud1JUbYZ4WTJ6Ingr3wUA5rd6lMQwsJftzIm9RznCITmWi_Ee5-i7LejR81o4C9YzKJFAJXXWj1IT3JR0-tKRHORFdy9cmiiAywkQeDwTY9axb0WoJoTa9JdD6-KaEIwKW6jAwVevbEf0hbqsCTQ_UOiYA6n7aE7CdkLdg0HEc2k-7rn9AVfuj&__tn__=-UC%2CP-R',
  ],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: DOMAIN,
  publisher: { '@type': 'Organization', name: 'NETFUSION Ideal & Innovations Solutions Ltd' },
};

/**
 * Generate a BreadcrumbList schema for non-home pages.
 * @param {Array<{name: string, path: string}>} items – breadcrumb items (Home is prepended automatically)
 */
export function breadcrumbSchema(items) {
  const list = [{ name: 'Home', path: '/' }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: list.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${DOMAIN}${item.path === '/' ? '' : item.path}`,
    })),
  };
}
