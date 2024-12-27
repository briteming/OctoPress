import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

import { siteConfig } from '@/config';

export const metadata: Metadata = {
  title: siteConfig.siteMetadata.name,
  description: siteConfig.siteMetadata.description,
  openGraph: {
    title: siteConfig.siteMetadata.name,
    description: siteConfig.siteMetadata.description,
    images: [{ url: siteConfig.siteMetadata.image }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.siteMetadata.name,
    description: siteConfig.siteMetadata.description,
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
        <div className="min-h-screen   flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
