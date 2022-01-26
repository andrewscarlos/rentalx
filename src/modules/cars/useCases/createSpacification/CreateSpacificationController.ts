import { CreateSpacificationUseCase } from "./CreateSpacificationUseCase";
import { Response, Request } from "express";
import { container } from "tsyringe";


export class CreateSpacificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    console.log('bateu na handle')
    const { name, description } = request.body;
    const createSpacificationUseCase = container.resolve(
      CreateSpacificationUseCase
    );
    const responses = await createSpacificationUseCase.execute({ name, description });
    console.log('responses',responses)
    return response.status(201).send(); 
  }
}
