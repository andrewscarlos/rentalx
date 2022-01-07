import { Response, Request } from "express";
import { CreateSpacificationUseCase } from "./CreateSpacificationUseCase";

export class CreateSpacificationController {
  constructor(private createSpacificationUseCase: CreateSpacificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpacificationUseCase.execute({ name, description });
    return response.status(201).send();
  }
}
