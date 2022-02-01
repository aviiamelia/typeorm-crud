import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "yup";
import { ObjectShape } from "yup/lib/object";

import { IUser } from "../types/user.types";

export const validate =
  (schema: ObjectSchema<ObjectShape>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    try {
      await schema.validate(data, { abortEarly: true, stripUnknown: true });
      return next();
    } catch (e: any) {
      res.status(400).json({ error: e.errors.join(", ") });
    }
  };
