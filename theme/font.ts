import { Geist, Great_Vibes } from 'next/font/google'
import '@/theme/css/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const greatVibes = Great_Vibes({
  variable: '--font-great-vibes',
  subsets: ['latin'],
  weight: ['400'],
})

export const Font = {
  Variables: `${geistSans.variable} ${greatVibes.variable}`,
}
