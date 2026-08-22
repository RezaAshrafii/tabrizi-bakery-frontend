import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { siteContent } from '@/content/site';

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tabrizi-bakery.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Tabrizi Bakery | Persian Pastries & Breads | Watertown, MA',
  description:
    'Tabrizi Bakery on Mount Auburn Street in Watertown, MA. Offering Persian pastries, baked goods, and specialty grocery items.',
  keywords: [
    'Tabrizi Bakery',
    'Watertown bakery',
    'Persian bakery Watertown MA',
    'Baklava Boston',
    'Barbari bread Watertown',
    'Persian sweets MA',
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true',
    follow: process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true',
  },
  openGraph: {
    title: 'Tabrizi Bakery | Watertown, MA',
    description:
      'A local Watertown bakery offering Persian sweets, baked goods, and specialty grocery items.',
    url: siteUrl,
    siteName: 'Tabrizi Bakery',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tabrizi Bakery | Watertown, MA',
    description:
      'A local Watertown bakery offering Persian sweets, baked goods, and specialty grocery items.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  'name': siteContent.meta.siteName,
  'image': `${siteUrl}/images/hero/01-storefront-entrance.webp`,
  '@id': `${siteUrl}/#bakery`,
  'url': siteUrl,
  'telephone': siteContent.contact.phoneRaw,
  'email': siteContent.contact.email,
  'servesCuisine': 'Persian',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': siteContent.contact.address.street,
    'addressLocality': siteContent.contact.address.city,
    'addressRegion': siteContent.contact.address.state,
    'postalCode': siteContent.contact.address.zip,
    'addressCountry': 'US',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 42.365225,
    'longitude': -71.186835,
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '10:00',
      'closes': '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Saturday',
      'opens': '10:00',
      'closes': '19:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Sunday',
      'opens': '11:00',
      'closes': '18:00',
    },
  ],
  'sameAs': [siteContent.contact.social.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF7F2] text-[#1C140F] antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
