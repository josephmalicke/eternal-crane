import { CraneIcon } from "@/theme/icons/crane";
import { H1 } from "@/theme/library/h1";

export function Header() {
  return (
    <header className="flex w-full items-center justify-center gap-4 border-b-2 border-neutral-700 bg-violet-900 py-2">
      <CraneIcon />
      <H1>Eternal Crane Music Dojo</H1>
    </header>
  )
}
