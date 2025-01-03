import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OctoPress - Turn GitHub Issues into a CMS for your blog',
  description: 'Create and manage your blog using GitHub Issues, combining seamless content management with GitHub\'s excellent versioning and collaboration features.',
  keywords: ['blog', 'CMS', 'GitHub Issues', 'Next.js', 'blogging platform'],
  openGraph: {
    title: 'OctoPress - GitHub Issues Powered Blog CMS',
    description: 'Transform your GitHub Issues into a powerful blog CMS',
    images: [{
      url: 'https://socialify.git.ci/SH20RAJ/OctoPress/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&stargazers=1&theme=Auto',
      width: 1200,
      height: 630,
      alt: 'OctoPress Preview'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@sh20raj',
    images: ['https://socialify.git.ci/SH20RAJ/OctoPress/image?description=1&forks=1&issues=1&language=1&name=1&owner=1&stargazers=1&theme=Auto']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
