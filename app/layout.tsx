import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "CGS — Common Ground Solutions | India's Green Infrastructure Platform",
  description:
    "CGS connects project developers, farmers, corporations and investors across India's carbon credit, renewable energy, waste management and ESG economy. Verra-aligned MRV, BRSR-compliant reporting, and India's most transparent carbon marketplace.",
  keywords: [
    'carbon credit marketplace India',
    'BRSR compliance platform',
    'carbon credit verification India',
    'Verra certified credits India',
    'CCTS compliance India',
    'ESG reporting platform India',
    'agricultural carbon credits India',
    'green project onboarding',
    'carbon offset India',
    'net zero India platform',
  ],
  openGraph: {
    title: 'CGS — Common Ground Solutions',
    description: "India's Green Infrastructure Platform",
    url: 'https://commongroundsolutions.in',
    siteName: 'Common Ground Solutions',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CGS — Common Ground Solutions',
    description: "India's Green Infrastructure Platform",
  },
  alternates: {
    canonical: 'https://commongroundsolutions.in',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Common Ground Solutions',
  alternateName: 'CGS',
  url: 'https://commongroundsolutions.in',
  description:
    "India's Green Infrastructure Platform connecting project developers, farmers, and corporations across carbon, renewable, and sustainability markets.",
  areaServed: 'IN',
  serviceType: [
    'Carbon Credit Marketplace',
    'ESG Compliance Reporting',
    'MRV Workflow Management',
    'Green Project Onboarding',
    'Carbon Credit Verification',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
