import { getCourseBySlug } from '../api'

export default async function Course({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = await getCourseBySlug(slug)

  return <main>{course.title}</main>
}
