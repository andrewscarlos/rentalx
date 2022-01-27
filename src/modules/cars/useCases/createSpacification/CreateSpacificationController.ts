import { CreateSpacificationUseCase } from "./CreateSpacificationUseCase";
import { Response, Request } from "express";
import { container } from "tsyringe";


export class CreateSpacificationController {
  async handle(request: Request, response: Response): Promise<Response> {
   
    const { name, description } = request.body;
    const createSpacificationUseCase = container.resolve(
      CreateSpacificationUseCase
    );
    await createSpacificationUseCase.execute({ name, description });
  
    return response.status(201).send(); 
  }
}
