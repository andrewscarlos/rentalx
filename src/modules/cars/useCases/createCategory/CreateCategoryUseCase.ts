import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}


export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  execute({ name, description }: IRequest): void {
    if (this.categoryRepository.findByName(name)) {
      throw new Error("Category Already Exists!");
    }
    this.categoryRepository.create({name, description})
  }
}
