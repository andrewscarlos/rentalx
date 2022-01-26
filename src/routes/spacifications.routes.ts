import { Router } from "express";
import { CreateSpacificationController } from "../modules/cars/useCases/createSpacification/CreateSpacificationController";

const specificationRoutes = Router();
const createSpacificationController = new CreateSpacificationController()

specificationRoutes.post("/", (request, response) => {
  return createSpacificationController.handle(request, response);
});

export { specificationRoutes };
