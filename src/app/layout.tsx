import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OctoPress - GitHub Issues as CMS',
  description: 'Turn your GitHub Issues into a CMS for your blog',
  openGraph: {
    title: 'OctoPress - GitHub Issues as CMS',
    description: 'Turn your GitHub Issues into a CMS for your blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OctoPress - GitHub Issues as CMS',
    description: 'Turn your GitHub Issues into a CMS for your blog',
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
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl">🐙</span>
                    <span className="font-bold text-xl text-gray-900">OctoPress</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/SH20RAJ/OctoPress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </nav>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
                  <p className="mt-4 text-base text-gray-500">
                    Turn your GitHub Issues into a CMS for your blog. Simple, fast, and SEO-friendly.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Links</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="https://github.com/SH20RAJ/OctoPress" className="text-base text-gray-500 hover:text-gray-900">
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/SH20RAJ/OctoPress/issues" className="text-base text-gray-500 hover:text-gray-900">
                        Blog Posts
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Creator</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="https://github.com/sh20raj" className="text-base text-gray-500 hover:text-gray-900">
                        Shaswat Raj
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-8">
                <p className="text-base text-gray-400 text-center">
                  &copy; {new Date().getFullYear()} OctoPress. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
