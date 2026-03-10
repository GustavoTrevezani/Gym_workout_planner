import userService from "../services/userService.js";

async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;

    const user = await userService.createUserService({
      name,
      email,
      password,
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}

const userController = { createUser };

export default userController;
