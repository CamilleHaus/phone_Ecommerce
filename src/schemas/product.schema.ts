import { z } from "zod";

export const productSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  brand: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  stock: z.number().int().nonnegative(),
  orderId: z.string().optional(),
});

export const createProductSchema = productSchema.omit({
  id: true,
  orderId: true,
});

export type TCreateProduct = z.infer<typeof createProductSchema>;

export const updateProductSchema = createProductSchema.partial();

export type TUpdateProduct = z.infer<typeof updateProductSchema>;
