import { Request, Response } from "express";
import { createUser } from "../services/user.services";

export const create = async (req: Request, res: Response) => {
  const user = await createUser(req.body);
  res.status(201).send(user);
};
