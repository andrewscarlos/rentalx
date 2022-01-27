import "reflect-metadata";
import { container, delay } from "tsyringe";
import { IUsersRepository } from "../../modules/accounts/interfaces/IUsersRepository";
import { UserRepository } from "../../modules/accounts/repositories/UserRepository";

import { ICategoryRepository } from "../../modules/cars/interfaces/ICategoriesRepository";

import { ISpacificationRepository } from "../../modules/cars/interfaces/ISpacificationRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/CategoriesRepository";
import { SpacificationRepository } from "../../modules/cars/repositories/SpacificationRepository";

// ICategoriesRepository
container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpacificationRepository>(
  "SpacificationRepository",
  SpacificationRepository
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);
