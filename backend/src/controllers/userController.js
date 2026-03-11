import userService from "../services/userService.js";

async function createUser(req, res) {
  const newUser = await userService.createUserService(req.body);
  res.status(201).json(newUser);
}

const userController = { createUser };

export default userController;
