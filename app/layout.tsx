import type {Metadata} from 'next';
import {Cormorant_Garamond, Inter} from 'next/font/google';
import './globals.css'; // Global styles

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tabrizi Bakery | Watertown, MA',
  description: 'Traditional Persian pastries, breads and sweets crafted with generations of family tradition in Watertown, Massachusetts.',
  openGraph: {
    title: 'Tabrizi Bakery',
    description: 'Traditional Persian pastries, breads and sweets in Watertown, MA.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tabrizi Bakery',
    description: 'Traditional Persian pastries, breads and sweets in Watertown, MA.',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "Tabrizi Bakery",
  "image": "https://www.tabrizibakery.com/01-storefront-entrance.webp",
  "@id": "https://www.tabrizibakery.com/",
  "url": "https://www.tabrizibakery.com/",
  "telephone": "+16179260880",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "56A Mount Auburn St",
    "addressLocality": "Watertown",
    "addressRegion": "MA",
    "postalCode": "02472",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.365225,
    "longitude": -71.186835
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "19:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "11:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/tabrizibakery/"
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

