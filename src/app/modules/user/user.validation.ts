import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  username: z.string(),
  password: z.string(),
  fullName: z.object({
    firstName: z.string().max(20),
    lastName: z.string().max(20),
  }),
  age: z.number(),
  email: z.string(),
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
