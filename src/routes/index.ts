import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./spacifications.routes";

const router = Router();
router.use("/categories", categoriesRoutes);
router.use("/spacifications", specificationRoutes);

export { router };
