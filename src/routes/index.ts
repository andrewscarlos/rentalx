import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./spacifications.routes";
import { usersRouter } from "./users.routes";

const router = Router();
router.use("/categories", categoriesRoutes);
router.use("/spacifications", specificationRoutes);
router.use("/users", usersRouter)
export { router };
