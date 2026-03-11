import passwordArgon2 from "../utils/password.js";

import userRepository from "../repositories/userRepositories.js";

async function createUserService(userData) {
  const { name, email, password, height, weight, age } = userData;

  const userExists = await userRepository.findByEmail(email);

  if (userExists) {
    throw new Error("Email já cadastrado");
  }
  const hashedPassword = await passwordArgon2.hashPassword(password);

  const user = await userRepository.createUser({
    name,
    email,
    password: hashedPassword,
    height,
    weight,
    age,
  });

  return user;
}

async function getUserById(id) {
  const user = await userRepository.findById(id);

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  return user;
}

const userService = {
  createUserService,
  getUserById,
};

export default userService;
