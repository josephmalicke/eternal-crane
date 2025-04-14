import { isAdmin } from '@/app/(payload)/rbac/isAdmin'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  access: {
    admin: isAdmin,
  },
  admin: {
    useAsTitle: 'email',
    group: 'System',
  },
  auth: {
    forgotPassword: {
      generateEmailHTML: (args) => {
        return `
        <p>Hello,</p>
        <p>You can reset your password by clicking the link below:</p>
        <a href="${process.env.SERVER_URL}/user/password-reset?token=${args?.token}">Reset Password</a>
        `
      },
    },
    lockTime: 60 * 10 * 1000,
    maxLoginAttempts: 5,
    tokenExpiration: 60 * 60 * 24 * 3,
    verify: {
      generateEmailHTML: (args) => {
        return `
        <p>Hello,</p>
        <p>${args.req.context.cats}</p>
        <p>You can create your account by clicking the link below:</p>
        <a href="${process.env.SERVER_URL}/user/verify-email?token=${args?.token}">Create Account</a>
        `
      },
    },
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    { name: 'username', type: 'text', required: true },
    {
      name: 'roles',
      type: 'select',
      options: ['admin', 'user'],
      defaultValue: 'user',
      hasMany: true,
    },
  ],
  slug: 'users',
}
