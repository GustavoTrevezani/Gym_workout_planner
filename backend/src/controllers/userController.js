import userService from "../services/userService.js";
import responseDTO from "../../DTO/user/userResponseDTO.js";

async function createUser(req, res) {
  const newUser = await userService.createUserService(req.body);

  res.status(201).json(newUser);
}

async function findUser(req, res) {
  const userId = Number(req.params.id);

  const User = await userService.getUserById(userId);
  res.status(200).json(responseDTO.userResponseDTO(User));
}

const userController = {
  createUser,
  findUser,
};

export default userController;
