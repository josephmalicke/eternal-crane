import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from '../(app)/user/collection'
import { resendAdapter } from '@payloadcms/email-resend'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { Lessons } from '@/app/(app)/lessons/collection'
import { Courses } from '@/app/(app)/courses/collection'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Courses, Lessons, Users],
  db: postgresAdapter({
    migrationDir: path.resolve(dirname, 'migrations'),
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  defaultDepth: 2,
  editor: lexicalEditor(),
  email: resendAdapter({
    defaultFromAddress: 'web@eternalcrane.com',
    defaultFromName: 'Eternal Crane Music Dojo',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  graphQL: {
    disable: true,
  },
  plugins: [
    vercelBlobStorage({
      enabled: true,
      clientUploads: true,
      collections: {},
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  telemetry: false,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
