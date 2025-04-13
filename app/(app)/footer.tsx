import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-12">
      <div className="flex gap-6">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </div>
      <p>&copy; 2025 Eternal Crane Music Dojo. All rights reserved.</p>
    </footer>
  )
}
