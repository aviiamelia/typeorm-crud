import { Request, Response } from "express";
import { createUser } from "../services/user.services";
import {
  listusers,
  userLogin,
  getUserProfile,
  updateUser,
  deleteUser,
} from "../services/user.services";

export const create = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).send(user);
  } catch (e: any) {
    console.log(e.detail);

    res.status(400).send({
      message: "E-mail already registered",
    });
  }
};

export const list = async (req: Request, res: Response) => {
  const users = await listusers();
  res.status(200).send(users);
};

export const login = async (req: Request, res: Response) => {
  try {
    let token = await userLogin(req.body);
    if (token.token === undefined) {
      res.status(401).send({
        message: "Wrong email/password",
      });
    } else {
      res.status(200).send(token);
    }
  } catch (e) {
    console.log(e);
    res.status(401).send({
      message: "Wrong email/password",
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await getUserProfile(req.user);
    return res.status(200).send(user);
  } catch (e: any) {
    console.log(e);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    let user = await updateUser(req.body, req.params.uuid);
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
  }
};

export const userDelete = async (req: Request, res: Response) => {
  try {
    let response = await deleteUser(req.params.uuid);
    if (response) {
      return res.status(200).send({
        message: "User deleted with success",
      });
    } else {
      return res.status(404).send({
        message: "User not found",
      });
    }
  } catch (e) {
    console.log(e);
  }
};
