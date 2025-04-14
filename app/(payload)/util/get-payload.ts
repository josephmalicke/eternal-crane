import 'server-only'
import config from '@payload-config'
import { getPayload as getPayloadSDK, Payload } from 'payload'
import { cache } from 'react'

export const getPayload = cache(async (): Promise<Payload> => {
  const payload = await getPayloadSDK({ config })
  return payload
})
