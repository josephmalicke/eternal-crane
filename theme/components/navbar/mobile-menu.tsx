"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/theme/utils/cn"

interface MobileMenuProps {
  children: React.ReactNode
  className?: string
}

export function MobileMenu({ children, className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const variants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, x: "-100%", transition: { duration: 0.3 } },
  }

  const buttonVariants = {
    open: { rotate: 45 },
    closed: { rotate: 0 },
  }

  return (
    <div className={cn("relative", className)}>
      {/* Hamburger button */}
      <button
        onClick={toggleMenu}
        className="relative z-30 flex h-10 w-10 flex-col items-center justify-center rounded-md bg-violet-600 p-2 md:hidden"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={buttonVariants}
          className="relative"
        >
          <span 
            className={cn(
              "absolute left-0 top-0 block h-0.5 w-6 bg-white transition-all duration-300",
              isOpen ? "rotate-90 !translate-y-0" : "-translate-y-1.5"
            )}
          />
          <span 
            className={cn(
              "block h-0.5 w-6 bg-white transition-all duration-300",
              isOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <span 
            className={cn(
              "absolute left-0 top-0 block h-0.5 w-6 bg-white transition-all duration-300",
              isOpen ? "!translate-y-0" : "translate-y-1.5"
            )}
          />
        </motion.div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Menu panel */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="fixed left-0 top-0 z-20 h-full w-3/4 max-w-sm border-r-2 border-neutral-800 bg-black shadow-xl md:hidden"
      >
        <div className="h-full">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

