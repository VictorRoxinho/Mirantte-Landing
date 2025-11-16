import { Helmet } from 'react-helmet-async';
import { SEO } from '../lib/constants';

export const SEOHead = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Mirantte',
    description: SEO.description,
    url: SEO.url,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Salvador',
      addressRegion: 'BA',
      addressCountry: 'BR',
      streetAddress: 'Costa Azul',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-12.9777',
      longitude: '-38.4688',
    },
    areaServed: {
      '@type': 'City',
      name: 'Salvador',
    },
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Apartment',
        name: 'Mirantte - Studios e Apartamentos',
        description:
          'Studios de 21,12m² e apartamentos de 30,22 a 33,76m² no Costa Azul',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Salvador',
          addressRegion: 'BA',
          addressCountry: 'BR',
          streetAddress: 'Costa Azul',
        },
      },
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{SEO.title}</title>
      <meta name="title" content={SEO.title} />
      <meta name="description" content={SEO.description} />
      <meta
        name="keywords"
        content="mirantte, apartamento salvador, studio costa azul, apartamento costa azul, imóvel bahia, investimento imobiliário, apartamento praia, rooftop salvador"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO.url} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:image" content={`${SEO.url}${SEO.image}`} />
      <meta property="og:site_name" content={SEO.siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={SEO.url} />
      <meta property="twitter:title" content={SEO.title} />
      <meta property="twitter:description" content={SEO.description} />
      <meta property="twitter:image" content={`${SEO.url}${SEO.image}`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mirantte" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Portuguese" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    </Helmet>
  );
};
