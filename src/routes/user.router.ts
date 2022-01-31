import { Router } from "express";
import { create } from "../controllers/user.controller";

const router = Router();

export const userRouter = () => {
  router.post("", create);
  return router;
};
