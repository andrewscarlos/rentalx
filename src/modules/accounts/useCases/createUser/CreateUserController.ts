import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, driver_license, password } = request.body;
    const createUseUserCase = container.resolve(CreateUserUseCase);
    await createUseUserCase.execute({
      name,

      email,
      driver_license,
      password,
    });

    return response.status(201).send();
  }
}
