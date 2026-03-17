import { z } from "zod";

const createUserDTO = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .trim()
    .min(1, { message: "Name must have at least 1 character" })
    .max(100, { message: "Name must have at least 1 character" }),
  email: z.string().trim().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must have at least 6 characters" })
    .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Must contain at least one number" }),
  height: z
    .number()
    .min(0.7, { message: "Height must be greater than 0.70m" })
    .max(2.7, { message: "Height must be greater than 0.70" })
    .optional(),
  weight: z
    .number()
    .min(20, { message: "Minimum weight is 20kg" })
    .max(400, { message: "Maximum weight is 400kg" })
    .optional(),
  age: z
    .number()
    .int()
    .min(10, { message: "Minimum age is 10 years" })
    .max(120, { message: "Maximum age is 120 years" })
    .optional(),
});

export default createUserDTO;
