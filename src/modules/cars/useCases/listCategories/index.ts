import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoreisUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository()
const listCategoriesUseCase = new ListCategoreisUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);
export { listCategoriesController };
