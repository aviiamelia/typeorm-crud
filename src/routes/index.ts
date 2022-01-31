import { userRouter } from "./user.router";
import { Express } from "express";

export const routerInit = (app: Express) => {
  app.use("/users", userRouter());
};
