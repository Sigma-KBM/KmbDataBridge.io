import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: 'KMB Data Bridge | Business Intelligence & Data Analytics',
  description:
    'Independent Business Intelligence and Data Analytics consulting for manufacturing, operations, quality, and productivity. Turn operational data into clear decisions.',
  icons: { icon: '/images/kmb-logo.png', apple: '/images/kmb-logo.png' },
}

export const viewport: Viewport = {
  themeColor: '#08264B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} bg-navy`}>
      <body className="bg-white font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
