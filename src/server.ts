import "reflect-metadata"
import express from "express";
import './database';

import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerFIle from "./swagger.json";

import "./shared/container";
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFIle));
app.use(router);
app.listen(3333, () => console.log("Server is running on port 3333"));
