import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Mystery QRCode',
  description: 'A viral marketing landing page built around a 3D animated QR code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} font-orbitron`}>{children}</body>
    </html>
  )
}