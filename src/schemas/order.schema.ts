import { z } from "zod";

const OrderStatus = z.enum([
  "PENDING",
  "PAID",
  "SHIPPED",
  "DELIVERED",
  "CANCELED",
]);

export const orderSchema = z.object({
  id: z.string().min(1),
  userId: z.string(),
  createAt: z.date(),
  updatedAt: z.date(),
  quantity: z.number().positive(),
  status: OrderStatus,
});

export const createOrderSchema = orderSchema.pick({ quantity: true });

export type TCreateOrder = z.infer<typeof createOrderSchema>;
