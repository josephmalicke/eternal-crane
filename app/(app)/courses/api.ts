import { getPayload } from '@/app/(payload)/util/get-payload'

export async function getCourses() {
  const payload = await getPayload()
  const courses = await payload.find({
    collection: 'courses',
  })
  return courses.docs
}

export async function getCourseBySlug(slug: string) {
  const payload = await getPayload()
  const course = await payload.find({
    collection: 'courses',
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  return course.docs[0]
}
