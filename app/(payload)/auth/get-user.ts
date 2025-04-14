import { User } from '@/app/(payload)/payload-types'
import { getPayload } from '@/app/(payload)/util/get-payload'
import { headers as nextHeaders } from 'next/headers'
import { cache } from 'react'

export const getUser = cache(async (): Promise<User | null> => {
  const headers = await nextHeaders()
  const payload = await getPayload()
  const user = await payload.auth({
    headers,
  })
  return user.user
})
