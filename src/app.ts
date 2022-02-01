import express from "express";
import { routerInit } from "./routes";

const app = express();

app.use(express.json());
routerInit(app);

export default app;
