import { ICategoryRepository } from "../../interfaces/ICategoriesRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../err/AppError";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoryRepository 
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const alredyExists = await this.categoryRepository.findByName(name);

    if (alredyExists) {
      throw new AppError("Category Already Exists!");
    }
    await this.categoryRepository.create({ name, description });  
  }
}
