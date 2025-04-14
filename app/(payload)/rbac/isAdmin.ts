import { PayloadRequest } from "payload"

export const isAdmin = ({ req }: { req: PayloadRequest }): boolean | Promise<boolean> => {
  const user = req.user 
  if (user && (user.roles!.includes('admin'))) {
    return true 
  }
  return false 
}
