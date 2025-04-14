import 'server-only'
import { z } from 'zod'

const Schema = z.object({
  BLOB_READ_WRITE_TOKEN: z.string(),
  DATABASE_URI: z.string(),
  PAYLOAD_SECRET: z.string(),
  RESEND_API_KEY: z.string(),
  SERVER_URL: z.string(),
})

export const ServerEnv = Schema.parse(process.env)
