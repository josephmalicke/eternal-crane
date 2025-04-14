import { getCourses } from '@/app/(app)/courses/api'
import Link from 'next/link'

export default async function Courses() {
  const courses = await getCourses()
  
  return (
    <main>
      {courses.map((course) => (
        <Link key={course.id} href={`/courses/${course.slug}`}>
          <h2>{course.title}</h2>
        </Link>
      ))}
    </main>
  )
}
