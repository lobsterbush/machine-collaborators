import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { GrainOverlay } from '@/components/Animated'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Machine Collaborators',
    template: '%s | Machine Collaborators',
  },
  description:
    'A global conversation series on what happens when researchers work with AI: the workflows, gains, failures, and new questions that emerge.',
  keywords: [
    'AI',
    'research',
    'academia',
    'machine learning',
    'conversation series',
    'scholarly AI',
    'human-AI collaboration',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Machine Collaborators',
    title: 'Machine Collaborators',
    description:
      'A global conversation series on what happens when researchers work with AI.',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Machine Collaborators',
    description:
      'A global conversation series on what happens when researchers work with AI.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-parchment text-ink`}
      >
        <GrainOverlay />
        <Header />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
