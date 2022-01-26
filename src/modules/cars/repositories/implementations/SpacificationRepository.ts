import { getRepository, Repository } from "typeorm";
import { Specifications } from "../../entities/Spacifications";
import {
  ICreateSpacificationDTO,
  ISpacificationRepository,
} from "../ISpacificationRepository";

export class SpacificationRepository implements ISpacificationRepository {
  private repository: Repository<Specifications>;

  constructor() {
    this.repository = getRepository(Specifications);
  }
  async create({ name, description }: ICreateSpacificationDTO): Promise<void> {
    const spacification = this.repository.create({ name, description });
    await this.repository.save(spacification);
  }
  async findByName(name: string): Promise<Specifications> {
    const spacification = await this.repository.findOne({ name });
    return spacification;
  }
}
