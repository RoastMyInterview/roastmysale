import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#09090b',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://roastmysale.me'),
  title: 'RoastMySale.me | Face Dick Headerson',
  description: 'Submit your listing, pricing, or sales pitch to the hot seat. Dick Headerson provides tough love, transparent reality checks, and instant cures for delusional pricing.',
  keywords: ['sale roast', 'listing roast', 'marketplace roast', 'pricing roast', 'Dick Headerson'],
  openGraph: {
    title: 'RoastMySale.me | Face Dick Headerson',
    description: 'Think buyers will pay that? Face Dick Headerson and see if your listing survives the hot seat.',
    url: 'https://roastmysale.me',
    siteName: 'RoastMySale.me',
    images: [{ url: 'https://roastmyinterview.me/dick-avatar.jpg', width: 1200, height: 630, alt: 'Dick Headerson' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoastMySale.me | Face Dick Headerson',
    description: 'Dick Headerson shreds delusional pricing and weak sales copy.',
    images: ['https://roastmyinterview.me/dick-avatar.jpg'],
  },
  icons: { icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🔥</text></svg>' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased selection:bg-orange-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
