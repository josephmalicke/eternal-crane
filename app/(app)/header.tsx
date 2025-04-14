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
    <Link
      href="/"
      className="block transition-all duration-500 hover:scale-110"
    >
      <Image
        src={siteLogo}
        alt="Eternal Crane Music Dojo"
        width={200}
        height={200}
        className="mx-auto"
      />
    </Link>
  )
}

function Nav() {
  return (
    <nav className="bg-electricGreen py-4">
      <ul className="flex justify-center gap-12">
        <li>
          <Link href="/">Account</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
      </ul>
    </nav>
  )
}
