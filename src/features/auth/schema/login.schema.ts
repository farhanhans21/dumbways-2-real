import { z } from 'zod';

export const loginSchema = z.object({
  userName: z.string(),
  password: z.string().min(6,"password must be at least 6 characters")
})

export type LoginFormInput = z.infer<typeof loginSchema>