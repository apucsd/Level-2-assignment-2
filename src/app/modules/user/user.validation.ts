import { z } from "zod";

const userValidationSchema = z.object({
  userId: z.string(),
  username: z.string(),
  password: z
    .string()
    .min(8)
    .max(20)
    .refine((data) => data.length >= 8, {
      message: "Password must be at least 8 characters",
    })
    .refine((data) => data.length <= 20, {
      message: "Password must be at most 20 characters",
    }),
  fullName: z.object({
    firstName: z.string().max(20),
    lastName: z.string().max(20),
  }),
  age: z.number(),
  email: z.string().email({ message: "Email is not valid" }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  orders: z
    .array(
      z.object({
        productName: z.string(),
        price: z.number(),
        quantity: z.number(),
      })
    )
    .optional(),
});

export const orderValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export default userValidationSchema;
