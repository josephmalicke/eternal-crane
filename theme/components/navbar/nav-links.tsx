"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/theme/utils/cn"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  orientation?: "horizontal" | "vertical"
}

export function NavLink({ 
  href, 
  children, 
  className,
  orientation = "vertical" 
}: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link 
      href={href}
      className={cn(
        "block font-medium transition-colors",
        orientation === "horizontal" 
          ? "p-2 text-xl hover:text-violet-300" 
          : "p-3 text-4xl hover:text-violet-300",
        isActive 
          ? orientation === "horizontal" 
            ? "text-white underline" 
            : "text-violet-300"
          : "text-gray-200",
        className
      )}
    >
      {children}
    </Link>
  )
}

interface NavLinksProps {
  className?: string
  orientation?: "horizontal" | "vertical"
  variant?: "desktop" | "mobile"
}

export function NavLinks({ 
  className, 
  orientation = "horizontal",
}: NavLinksProps) {
  return (
    <nav className={className}>
      <ul className={cn(
        "flex gap-6",
        orientation === "vertical" 
          ? "flex-col px-4" 
          : "flex-row items-center"
      )}>
        <li><NavLink href="/" orientation={orientation}>Home</NavLink></li>
        <li><NavLink href="/about" orientation={orientation}>About</NavLink></li>
        <li><NavLink href="/classes" orientation={orientation}>Classes</NavLink></li>
        <li><NavLink href="/instructors" orientation={orientation}>Instructors</NavLink></li>
        <li><NavLink href="/contact" orientation={orientation}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}