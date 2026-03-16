import { z } from "zod";

const createUserDTO = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must have at least 6 characters" })
    .regex(/[A-Z]/, { message: "Must contain uppercase letter" })
    .regex(/[0-9]/, { message: "Must contain number" }),
  height: z.number().optional(),
  weight: z.number().optional(),
  age: z.number().optional(),
});

const userDTO = {
  createUserDTO,
};

export default userDTO;
