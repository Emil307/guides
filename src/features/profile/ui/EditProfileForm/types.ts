import { z } from "zod";

export type ValidationSchema = z.infer<typeof $ValidationSchema>;

export const $ValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  link: z.string().optional(),
});
