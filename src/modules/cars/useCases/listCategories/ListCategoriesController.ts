import { Request, Response } from "express";
import { ListCategoreisUseCase } from "./ListCategoriesUseCase";
import { container } from "tsyringe";
export class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoreisUseCase);
    const all = await listCategoriesUseCase.execute();
    return response.status(200).json(all);
  }
}
