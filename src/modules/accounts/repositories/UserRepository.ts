import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "../interfaces/IUsersRepository";

export class UserRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    driver_license,
    password,
    id,
    avatar
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
      id,
      avatar
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const userByEmail = await this.repository.findOne({ email });
    return userByEmail;
  }

  async findById(userId: string): Promise<User> {
    const userById = await this.repository.findOne(userId);
    return userById;
  }
}
