import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateSpacificationUseCase } from "./CreateSpacificationUseCase";

export class CreateSpacificationController {

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    const createSpacificationUseCase = container.resolve(CreateSpacificationUseCase)
    createSpacificationUseCase.execute({ name, description });
    return response.status(201).send();
  }
}
