import { Request, Response } from "express";
import { ListCategoreisUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoreisUseCase) {}
  handle(request: Request, response: Response): Response {
    const all  = this.listCategoriesUseCase.execute()
    return response.status(200).json(all);
  }
}
