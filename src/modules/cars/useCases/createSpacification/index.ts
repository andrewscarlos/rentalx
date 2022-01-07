import { SpacificationRepository } from "../../repositories/implementations/SpacificationRepository";
import { CreateSpacificationController } from "./CreateSpacificationController";
import { CreateSpacificationUseCase } from "./CreateSpacificationUseCase";

const specificationsRepository = new SpacificationRepository();

const createSpecificationUseCase = new CreateSpacificationUseCase(
  specificationsRepository
);
const createSpacificationController = new CreateSpacificationController(
  createSpecificationUseCase
);

export { createSpacificationController };
