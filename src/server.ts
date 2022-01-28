import "reflect-metadata";
import express, { NextFunction, Response, Request } from "express";
import "express-async-errors";
import "./database";

import { router } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerFIle from "./swagger.json";

import "./shared/container";
import { AppError } from "./err/AppError";
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFIle));
app.use(router);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json(err.message);
    }
    return response.status(500).json({
      status: "error",
      message: `Internal Server error - ${err.message}`,
    });
  }
);
app.listen(3333, () => console.log("Server is running on port 3333"));
