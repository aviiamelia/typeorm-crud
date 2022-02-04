import { userRouter } from "./user.router";
import { Express } from "express";
import { loginRouter } from "./login";

export const routerInit = (app: Express) => {
  app.use("/users", userRouter());
  app.use("/login", loginRouter());
};
