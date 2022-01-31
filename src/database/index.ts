import { ConnectionOptions } from "typeorm";
import { User } from "../entities";

const config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "avila",
  password: "12345",
  database: "crud_node",
  entities: [User],
  synchronize: true,
  logging: false,
};

export default config;
