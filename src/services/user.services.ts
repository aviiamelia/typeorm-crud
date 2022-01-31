import { getRepository } from "typeorm";
import * as bcrypt from "bcryptjs";
import { User } from "../entities/index";

interface IUser {
  id: string;
  name: string;
  password: string;
  email: string;
  isAdmin: boolean;
}

export const createUser = async (data: IUser) => {
  const userRepository = getRepository(User);
  const hashPassword = bcrypt.hashSync(data.password, 10);
  data.password = hashPassword;
  const user = userRepository.create(data);
  await userRepository.save(user);
  let { password: erasePassword, ...response } = user;
  return response;
};
