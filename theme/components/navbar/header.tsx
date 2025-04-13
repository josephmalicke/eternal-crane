'use client'
import { MobileMenu } from '@/theme/components/navbar/mobile-menu'
import { NavLinks } from '@/theme/components/navbar/nav-links'
import { CraneIcon } from '@/theme/icons/crane'

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-between border-b-2 border-neutral-700 bg-violet-950 px-4 py-2">
      <div className="flex items-center gap-4">
        <CraneIcon />
        <span className=" text-3xl sm:block font-decorative mt-3">
          Eternal Crane Music Dojo
        </span>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:block">
        <NavLinks />
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden">
        <MobileMenu>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 px-2 py-4 bg-violet-950 border-b-2 border-neutral-700">
              <CraneIcon className="h-8 w-8" />
              <span className="text-4xl mt-3 tracking-wider font-decorative">Eternal Crane</span>
            </div>
            <NavLinks orientation="vertical" />
          </div>
        </MobileMenu>
      </div>
    </header>
  )
}

