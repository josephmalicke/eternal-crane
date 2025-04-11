import { CraneIcon } from '@/theme/icons/crane'
import { H1 } from '@/theme/library/h1'

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-1">
        <div className="aspect-video bg-blue-400" />
        <div className="aspect-video bg-red-400" />
        <div className="aspect-video bg-green-400" />
      </div>
    </main>
  )
}
