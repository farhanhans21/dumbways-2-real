import { z } from "zod";

export const replySchema = z.object({
  content: z.string().min(4,"At least 4 characters"),
  image: z.string().optional()
})

export type CreateReplyForm = z.infer<typeof replySchema>;