import { z } from "zod";

export const cartItemSchema = z.object({
  id: z.string().min(1),
  cartId: z.string(),
  productId: z.string(),
  quantity: z.number().positive(),
});

export type TCartItem = z.infer<typeof cartItemSchema>;

export const updateCartSchema = cartItemSchema.pick({ quantity: true });

export type TUpdateCart = z.infer<typeof updateCartSchema>;
