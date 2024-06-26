import type { Metadata } from 'next'

import './globals.css'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
