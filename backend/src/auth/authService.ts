import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepositories.js";
import passwordArgon2 from "../utils/password.js";
import loginDTO from "../../DTO/user/loginUserDTO.js";
import { z } from "zod";
import AppError from "../utils/AppError.js";

type LoginDTO = z.infer<typeof loginDTO>;

class AuthService {
  async login(data: LoginDTO) {
    const { email, password } = data;
    const normalizedEmail = email.toLowerCase().trim();
    const user = await userRepository.findByEmail(normalizedEmail);

    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const isPasswordValid = await passwordArgon2.verifyPassword(
      user?.password || "$argon2id$v=19$m=65536,t=3,p=4$fakehash",
      password,
    );

    if (!isPasswordValid) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" },
    );

    return { token };
  }
}

export default new AuthService();
