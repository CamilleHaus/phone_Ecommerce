import { z } from "zod";

const userStatus = z.enum([
  "CLIENT",
  "ADMIN"
]);

export const userSchema = z.object({
  id: z.string().min(1),
  email: z.string().email(),
  name: z.string().min(1),
  role: userStatus,
  password: z.string().min(1),
  cartId: z.string().optional(),
});

export type TUserSchema = z.infer<typeof userSchema>;

export const createUserSchema = userSchema.omit({ id: true, cartId: true, role: true });

export type TCreateUser = z.infer<typeof createUserSchema>;

export const loginUserSchema = userSchema.omit({
  id: true,
  name: true,
  cartId: true,
});

export type TLoginUser = z.infer<typeof loginUserSchema>;

export type TLoginReturn = {
  user: TLoginUser;
  accessToken: string;
};
