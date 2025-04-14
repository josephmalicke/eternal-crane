# Eternal Crane Music Dojo

Eternal Crane Music Dojo is a NextJS and PayloadCMS web application using Postgres. It is created by Robert Malicke to showcase his skillsets for employment and help users learn music.

## Frontend

Tailwind is used as a CSS library. The app emphasizes reuse with styled React components and occasional global CSS. It utilizes lucide for vector icons.

## Cloud services (production)
  
Vercel hosts the NextJS server. Neon is the serverless Postgres database. Vercel Blob Storage is used for binary storage. Mux Video is used for video storage and streaming. Resend is used for sending emails. Stripe is used for credit card payments.

## Getting started

### IDE setup

1. Install the following extensions for Cursor (or VS code):

- `ESLint` by `Microsoft`
- `PostCSS Language Support` by `csstools`
- `Prettier - Code formatter` by `prettier.io`
- `Tailwind CSS IntelliSense` by `Tailwind Labs`

2. Configure the default IDE formatter to Prettier and enable format on save.
  
### Starting the server

1. Copy `.env.example` to `.env.development` and fill in values.
2. Install dependencies with `yarn`
3. Start the local database with `docker compose up` (in another window or detatched)
4. Start the app with `yarn dev`

### Building the docker image

1. Run `docker build .`

### Optional IDE extensions

The following extensions are optional but may enhance development:

1. `Docker` by `Microsoft`
2. `DotENV` by `mikestead`
3. `Git Graph` by `mhutchie`
4. `Git History` by `Don Jayamanne`
5. `Git Lens` by `GitKraken`
6. `Material Icon Theme` by `Philipp Kief`
7. `npm Intellisense` by `Christian Kohler`
8. `Pitch Black Theme` by `Viktor Qvarfordt`
9. `Remote Explorer` (with `Remote - SSH` and `Remote - SSH: Editing`) by `Microsoft`

## Deployment instructions

1. Create a new database migration with `yarn payload migrate:create`
2. Apply the migration to production with `yarn payload:prod migrate`
3. Commit and push `main` branch
