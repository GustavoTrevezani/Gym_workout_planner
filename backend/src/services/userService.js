import passwordArgon2 from "../utils/password.js";
import appError from "../utils/AppError.js";

import userRepository from "../repositories/userRepositories.js";

async function createUserService(userData) {
  const { name, email, password, height, weight, age } = userData;

  const userExists = await userRepository.findByEmail(email);

  if (userExists) {
    throw new appError("Email already exist", 409);
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

async function getAllUsers() {
  const user = await userRepository.findAll();

  if (!user) {
    throw new appError("Users not found", 404);
  }

  return user;
}

async function getUserById(id) {
  const user = await userRepository.findById(id);

  if (!user) {
    throw new appError("User not found", 404);
  }

  return user;
}

async function patchUpdateUser(id, data) {
  const user = await userRepository.findById(id);

  if (!user) {
    throw new appError("User not found", 404);
  }

  if (Object.keys(data).length === 0) {
    throw new appError("At least one field must be provided for update", 411);
  }

  const allowedFields = ["name", "height", "weight", "age"];

  const filteredData = {};

  for (const key of allowedFields) {
    if (data[key] !== undefined) {
      filteredData[key] = data[key];
    }
  }

  const updatedUser = await userRepository.updateUser(id, filteredData);

  return updatedUser;
}

async function deleteUser(id) {
  const user = await userRepository.findById(id);

  if (!user) {
    throw new appError("User not found", 404);
  }

  const userDelete = await userRepository.deleteUser(id);

  return userDelete;
}

const userService = {
  createUserService,
  getAllUsers,
  getUserById,
  patchUpdateUser,
  deleteUser,
};

export default userService;
