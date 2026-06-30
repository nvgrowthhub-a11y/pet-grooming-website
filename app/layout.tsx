import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import FacebookPixel from '@/components/FacebookPixel';
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TOES N TAILS - Premium Pet Grooming Services',
  description: 'Luxury pet grooming and spa services at home. Professional groomers for dogs and cats in Delhi NCR. Book your appointment now!',
  generator: 'v0.app',
  icons: {
    icon: '/images/toes-n-tails-logo.png',
    apple: '/images/toes-n-tails-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ec4899',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-pink-50`}
    >
      <body className="font-sans antialiased">
        <FacebookPixel />

        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
