import { getCourses } from '@/app/(app)/courses/api'
import { Media } from '@/app/(payload)/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default async function Courses() {
  const courses = await getCourses()

  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Link
          className="aspect-video border-2 border-neutral-700"
          key={course.id}
          href={`/courses/${course.slug}`}
        >
          <Image
            src={(course.cover as Media)!.url!}
            alt={course.title}
            width={300}
            height={300}
          />
        </Link>
      ))}
    </main>
  )
}
