import Image from 'next/image'
import siteLogo from '@/public/site-logo.png'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <SiteLogo />
      <Nav />
    </header>
  )
}

function SiteLogo() {
  return (
    <Image
      src={siteLogo}
      alt="Eternal Crane"
      width={200}
      height={200}
      className="mx-auto"
    />
  )
}

function Nav() {
  return (
    <nav>
      <ul className="flex justify-center gap-12">
        <li>
          <Link href="/">Account</Link>
        </li>
        <li>
          <Link href="/">Lessons</Link>
        </li>
      </ul>
    </nav>
  )
}
