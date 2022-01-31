import app from "./app";
import "reflect-metadata";
import { createConnection } from "typeorm";
import config from "./database";

createConnection(config)
  .then(() => {
    console.log("database connected!");
    app.listen(3000, () => {
      console.log("server running");
    });
  })
  .catch((e) => console.log(e));
