import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import Footer from '@/components/shared/Footer'

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://rainaistyling.com'),
  title: 'Raina Stylist | Professional Personal and Celebrity Stylist',
  description: 'Professional wardrobe stylist specializing in editorial, celebrity, and commercial styling. Transform your look with expert fashion guidance.',
  keywords: ['wardrobe stylist', 'fashion stylist', 'celebrity stylist', 'editorial styling', 'commercial styling', 'personal stylist'],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '180x180' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: 'Raina Stylist | Professional Personal and Celebrity Stylist',
    description: 'Transform your look with expert fashion guidance from professional wardrobe stylist Raina I.',
    images: ['/images/home/og-image.svg'],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raina Stylist | Professional Personal and Celebrity Stylist',
    description: 'Transform your look with expert fashion guidance from professional wardrobe stylist Raina I.',
    images: ['/images/home/og-image.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="180x180" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      </head>
      <body className={`${inter.className} bg-neutral-50 text-neutral-900 antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
} 