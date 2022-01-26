import "reflect-metadata";
import { container, delay } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";

import { SpacificationRepository } from "../../modules/cars/repositories/implementations/SpacificationRepository";
import { ISpacificationRepository } from "../../modules/cars/repositories/ISpacificationRepository";

// ICategoriesRepository
container.registerSingleton<ICategoryRepository>("CategoriesRepository",delay(() => CategoriesRepository))

// container.registerSingleton<ISpacificationRepository>("SpacificationRepository",SpacificationRepository)