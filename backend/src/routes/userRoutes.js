import { Router } from "express";
import userController from "../controllers/userController.js";
import validateDTO from "../middlewares/validateDTO.js";
import createUserDTO from "../../DTO/user/createUserDTO.js";
import updateUserDTO from "../../DTO/user/updateUserDTO.js";
import asyncHandler from "../utils/asyncHandler.js";

const router = Router();

router.post(
  "/users",
  validateDTO(createUserDTO),
  asyncHandler(userController.createUser),
);
router.get("/users/:id", asyncHandler(userController.findUser));
router.get("/users/", asyncHandler(userController.findAll));
router.patch(
  "/users/:id",
  validateDTO(updateUserDTO),
  asyncHandler(userController.updateUser),
);
router.delete("/users/:id", asyncHandler(userController.deleteUser));

export default router;
