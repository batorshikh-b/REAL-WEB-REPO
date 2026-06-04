import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LangProvider } from '@/contexts/lang-context'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});


export const metadata: Metadata = {
  metadataBase: new URL('https://digitalapex.mn'),
  title: 'Digital Apex — IT Consulting & Solutions in Mongolia',
  description: 'Digital Apex provides professional IT consulting, network security, helpdesk support, server hosting, and digital transformation services in Ulaanbaatar, Mongolia.',
  keywords: ['IT consulting', 'digital transformation', 'network security', 'helpdesk', 'cloud services', 'server hosting', 'Mongolia', 'Ulaanbaatar', 'Монгол'],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Digital Apex — IT Consulting & Solutions in Mongolia',
    description: 'Professional IT consulting, network security, helpdesk support, and digital transformation services in Ulaanbaatar, Mongolia.',
    type: 'website',
    url: 'https://digitalapex.mn',
    images: [{ url: '/favicon.png', width: 512, height: 512, alt: 'Digital Apex' }],
    siteName: 'Digital Apex',
    locale: 'mn_MN',
  },
  twitter: {
    card: 'summary',
    title: 'Digital Apex — IT Consulting & Solutions in Mongolia',
    description: 'Professional IT consulting and digital transformation services in Mongolia.',
    images: ['/favicon.png'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn" className="bg-background scroll-smooth scroll-pt-24" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LangProvider>
            {children}
          </LangProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
