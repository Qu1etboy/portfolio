import Navbar from '@/components/Navbar';
import './globals.css';
import './clash-display.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Qu1etboy',
    template: '%s | Qu1etboy',
  },
  description: 'Weerawong Vonggatunyu personal website',
  icons: {
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Qu1etboy',
    description: 'Weerawong Vonggatunyu personal website',
    url: 'https://qu1etboy.dev',
    siteName: 'Qu1etboy',
    images: [
      {
        url: 'https://qu1etboy.dev/qu1etboy.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'Qu1etboy',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto mb-8 max-w-3xl p-8">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
