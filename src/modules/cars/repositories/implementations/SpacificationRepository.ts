import { Specification } from "../../entities/Spacification";
import {
  ICreateSpacificationDTO,
  ISpacificationRepository,
} from "../ISpacificationRepository";

export class SpacificationRepository implements ISpacificationRepository {
  private spacification: Specification[];
  constructor() {
    this.spacification = [];
  }
  create({ name, description }: ICreateSpacificationDTO): void {
    const spapacification = new Specification();
    Object.assign(spapacification, {
      name,
      description,
      createdAt: new Date(),
    });

    this.spacification.push(spapacification);
  }
  findByName(name: string): Specification {
    const spacification = this.spacification.find(
      (spacification) => spacification.name === name
    );
    return spacification;
  }
}
