import { Router } from "express";
import { loginSchema } from "../models/userSchema";
import { login } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.user";

const router = Router();

export const loginRouter = () => {
  router.post("", validate(loginSchema), login);
  return router;
};
