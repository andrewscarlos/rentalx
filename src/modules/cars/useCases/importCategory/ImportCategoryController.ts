import { Response, Request } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { container } from "tsyringe";

export class ImportCategoryController {
  
 async handle(request: Request, response: Response): Promise<Response> {
  const importCategoryUseCase = container.resolve(ImportCategoryUseCase)
    const { file } = request;
    await importCategoryUseCase.execute(file);
    return response.send();
  }
}
