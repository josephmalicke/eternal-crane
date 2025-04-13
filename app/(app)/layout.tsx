import type { Metadata } from 'next'
import { Font } from '@/theme/font'
import siteLogo from '@/public/site-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import '@/theme/globals.css'

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
      <body className={`antialiased ${Font.Variables} `}>
        <Image
          src={siteLogo}
          alt="Eternal Crane"
          width={200}
          height={200}
          className="mx-auto"
        />
        <nav>
          <ul className="flex justify-center gap-12">
            <li className="font-decorative text-3xl font-semibold tracking-tighter transition-all duration-500 hover:tracking-wider hover:underline">
              <Link href="/">Account</Link>
            </li>
            <li className="font-decorative text-3xl font-semibold tracking-tighter transition-all duration-500 hover:tracking-wider hover:underline">
              <Link href="/">Lessons</Link>
            </li>
          </ul>
        </nav>
        <div className="px-12 py-4 text-justify text-xl">
          At Eternal Crane Music Dojo, we blend the ancient wisdom of Taoism
          with the transformative power of music. Our teachings are rooted in
          the Taoist philosophy of balance, harmony, and flow, encouraging
          students to not only master their musical craft but to cultivate inner
          peace and mindfulness. Just as the crane glides gracefully through the
          sky, we guide our students to approach music as a natural extension of
          their being, connecting mind, body, and soul. With every note, we
          invite you to embark on a journey of self-discovery, embracing the
          eternal rhythm of life through the art of sound. At the Eternal Crane
          Music Dojo, we believe that true mastery lies in the art of effortless
          practice and the pursuit of inner stillness.
        </div>
        {children}
        <footer className="flex flex-col justify-center items-center p-12">
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:underline">
              Terms of Service
            </Link>
          </div>
          <p>&copy; 2025 Eternal Crane Music Dojo. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
