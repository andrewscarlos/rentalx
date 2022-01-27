import { Category } from "../entities/Category";

import { getRepository, Repository } from "typeorm";
import { ICategoryRepository } from "../interfaces/ICategoriesRepository";
import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";

export class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>;

 constructor() {
    this.repository = getRepository(Category);
  };

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoty =  this.repository.create({
      name,
      description,
    });
    await this.repository.save(categoty);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}
