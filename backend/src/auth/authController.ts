import { Request, Response } from "express";
import loginDTO from "../../DTO/user/loginUserDTO.js";
import authService from "./authService.ts";

async function loginController(req: Request, res: Response): Promise<Response> {
  const data = loginDTO.parse(req.body);

  const result = await authService.login(data);

  return res.json(result);
}

export default loginController;
