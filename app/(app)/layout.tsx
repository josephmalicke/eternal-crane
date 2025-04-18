import type { Metadata } from 'next'
import { Font } from '@/theme/font'
import { Footer } from '@/app/(app)/footer'
import { Header } from '@/app/(app)/header'
import '@/theme/css/globals.css'

export const metadata: Metadata = {
  title: 'Eternal Crane Music Dojo',
  description: 'Music school for all genres.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${Font.Variables}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
