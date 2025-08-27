import z from "zod";

export const createServiceSchema = z.object({
  title: z.string().min(4),
  basePrice: z.number().min(20)
})

export type createServiceSchemaData = z.infer<typeof createServiceSchema>