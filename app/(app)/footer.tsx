import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-electricPurple flex flex-col items-center justify-center p-12">
      {/* <div className="flex gap-6">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </div> */}
      <p>&copy; 2025 Robert Malicke. All rights reserved.</p>
    </footer>
  )
}
