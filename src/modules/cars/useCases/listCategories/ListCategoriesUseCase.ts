import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../interfaces/ICategoriesRepository";

@injectable()
export class ListCategoreisUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryRepository) {}
 async execute(): Promise<Category[]> {
    const catetories = await this.categoriesRepository.list();
    return catetories;
  }
}
