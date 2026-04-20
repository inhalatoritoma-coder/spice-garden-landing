import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Spice Garden | Beachfront Indian & Halal Restaurant in Batumi',
  description: 'Experience authentic Indian & Halal cuisine at Batumi\'s most beloved beachfront restaurant. Award-winning flavors, stunning Black Sea views, and warm hospitality await.',
  keywords: 'Indian restaurant Batumi, Halal restaurant Batumi, beachfront dining Batumi, authentic Indian food Georgia, Spice Garden Batumi',
  openGraph: {
    title: 'Spice Garden | Beachfront Indian & Halal Restaurant in Batumi',
    description: 'Experience authentic Indian & Halal cuisine at Batumi\'s most beloved beachfront restaurant.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d1810',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
