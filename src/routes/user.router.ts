import { Router } from "express";
import { create, list, login, getUser, update, userDelete } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.user";
import { userSchema, loginSchema } from "../models/userSchema";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { isAdiminstrator } from "../middlewares/isAdministrator";

const router = Router();

export const userRouter = () => {
  router.post("", validate(userSchema), create);
  router.get("", isAuthenticated, isAdiminstrator, list);
  router.get("/profile", isAuthenticated, getUser);
  router.patch("/:uuid", isAuthenticated, isAdiminstrator, update);
  router.delete("/:uuid", isAuthenticated, isAdiminstrator, userDelete);
  return router;
};
