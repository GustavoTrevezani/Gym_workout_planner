import { Router } from "express";
import authController from "./authController.ts";

const router = Router();

router.post("/login", authController);

export default router;
