import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoreisUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}
  execute(): Category[] {
    const catetories = this.categoriesRepository.list();
    return catetories;
  }
}
