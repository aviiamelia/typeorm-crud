import { getRepository, getCustomRepository, useContainer } from "typeorm";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../entities/index";
import { IUser, ILogin } from "../types/user.types";
import UserRepository from "../repositories/UserRepository";

export const createUser = async (data: IUser) => {
  const userRepository = getRepository(User);
  const hashPassword = bcrypt.hashSync(data.password, 10);
  data.password = hashPassword;
  const { name, email, password, isAdm } = data;
  const user = userRepository.create({ name, password, email, isAdm });
  await userRepository.save(user);
  const { password: erase, ...response } = user;
  return response;
};

export const listusers = async () => {
  const userRepository = getCustomRepository(UserRepository);
  const users = userRepository.list();
  return users;
};

export const userLogin = async (data: ILogin) => {
  let { password, email } = data;
  const userRepository = getCustomRepository(UserRepository);
  const user = await userRepository.findByEmail(email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return { message: "Wrong email/password" };
  }

  let token = jwt.sign(
    { uuid: user.uuid, email: user.email, password: user.password, isAdm: user.isAdm },
    "secret_key",
    {
      expiresIn: "1d",
    }
  );
  return {
    token: token,
  };
};

export const getUserProfile = async (data: IUser) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ uuid: data.uuid });
  if (!user) {
    return {
      message: "user not found",
    };
  }
  let { password: erase, ...response } = user;
  return response;
};

export const updateUser = async (data: IUser, uuid: string) => {
  const userRepository = getRepository(User);
  let date = new Date();
  data.updatedOn = date;
  await userRepository.update({ uuid: uuid }, data);
  let user = await userRepository.findOne({ uuid: uuid });
  if (!user) {
    return {
      message: "user not found",
    };
  }
  let { password: erase, ...response } = user;
  return response;
};

export const deleteUser = async (uuid: string) => {
  const userRepository = getRepository(User);
  let user = await userRepository.findOne({ uuid: uuid });
  if (user) {
    await userRepository.delete({ uuid: uuid });
    return true;
  }
  return false;
};
