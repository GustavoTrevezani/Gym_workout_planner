import userService from "../services/userService.js";
import userResponseDTO from "../../DTO/user/userResponseDTO.js";

async function createUser(req, res) {
  const newUser = await userService.createUserService(req.body);

  res.status(201).json(newUser);
}

async function findAll(req, res) {
  const user = await userService.getAllUsers();

  res.status(200).json(user);
}

async function findUser(req, res) {
  const userId = Number(req.params.id);

  const User = await userService.getUserById(userId);
  res.status(200).json(userResponseDTO(User));
}

async function updateUser(req, res) {
  const userId = Number(req.params.id);

  const updatedUser = await userService.patchUpdateUser(
    userId,
    req.validateData,
  );

  return res.json(userResponseDTO(updatedUser));
}

async function deleteUser(req, res) {
  const userId = Number(req.params.id);

  const deleteUser = await userService.deleteUser(userId);

  return res.status(200).json(userResponseDTO(deleteUser));
}

const userController = {
  createUser,
  findAll,
  findUser,
  updateUser,
  deleteUser,
};

export default userController;
