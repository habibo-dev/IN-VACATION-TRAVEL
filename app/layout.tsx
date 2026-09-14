import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomBar from '@/components/BottomBar';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://in-vacation-travel-habibo-devs-projects.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'In Vacation Travel — Agence de voyage à Khemis Miliana',
    template: '%s | In Vacation Travel',
  },
  description: 'In Vacation Travel, agence de voyage à Khemis Miliana, Aïn Defla. Découvrez les services disponibles et envoyez votre demande de voyage.',
  keywords: ['agence de voyage Khemis Miliana', 'agence de voyage Aïn Defla', 'In Vacation Travel', 'voyage Khemis Miliana', 'tourisme Algérie'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'In Vacation Travel',
    description: 'Votre projet de voyage commence ici.',
    type: 'website',
    locale: 'fr_DZ',
    url: siteUrl,
    siteName: 'In Vacation Travel',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: 'In Vacation Travel',
              url: siteUrl,
              telephone: '+213552426512',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '44 Rue Colonel Bougara',
                addressLocality: 'Khemis Miliana',
                postalCode: '44000',
                addressRegion: 'Aïn Defla',
                addressCountry: 'DZ',
              },
            }),
          }}
        />
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
