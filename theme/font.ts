import { Open_Sans, Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['600'],
})

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
})

export const Font = {
  Variables: `${openSans.variable} ${cinzel.variable}`,
}
