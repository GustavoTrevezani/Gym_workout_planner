import { z } from "zod";

const createUserDTO = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Nome deve ter no mínimo 1 caractere" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" })
    .regex(/[A-Z]/, { message: "Deve conter letra maiúscula" })
    .regex(/[0-9]/, { message: "Deve conter números" }),
  height: z
    .number()
    .min(0.7, { message: "Altura deve ser maior que 0,70m" })
    .max(2.7, { message: "Altura deve ser menor que 2,70m" })
    .optional(),
  weight: z
    .number()
    .min(20, { message: "Peso mínimo é 20kg" })
    .max(400, { message: "Peso máximo é 400kg" })
    .optional(),
  age: z
    .number()
    .int()
    .min(10, { message: "Idade mínima é 10 anos" })
    .max(120, { message: "Idade máxima é 120 anos" })
    .optional(),
});

export default createUserDTO;
