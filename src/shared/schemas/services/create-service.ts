import z from "zod";

export const createServiceSchema = z.object({
  name: z.string().min(4),
  basePrice: z.number(),
});

export type createServiceSchemaData = z.infer<typeof createServiceSchema>;
