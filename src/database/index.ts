import { ConnectionOptions } from "typeorm";
import { User } from "../entities";

const config: ConnectionOptions = {
  type: "sqlite",
  database: ":memory:",
  dropSchema: true,
  entities: ["./src/entities/*.ts"],
  synchronize: true,
  logging: false,
};

export default config;
