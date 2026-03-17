import { Router } from "express";
import userController from "../controllers/userController.js";
import validateDTO from "../middlewares/validateDTO.js";
import createUserDTO from "../../DTO/user/createUserDTO.js";
import updateUserDTO from "../../DTO/user/updateUserDTO.js";

const router = Router();

router.post("/users", validateDTO(createUserDTO), userController.createUser);
router.get("/users/:id", userController.findUser);
router.get("/users/", userController.findAll);
router.patch(
  "/users/:id",
  validateDTO(updateUserDTO),
  userController.updateUser,
);
router.delete("/users/:id", userController.deleteUser);

export default router;
