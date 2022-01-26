import { inject, injectable } from "tsyringe";
import { ISpacificationRepository } from "../../repositories/ISpacificationRepository";

export interface IRequest {
  name: string;
  description: string;
}
@injectable()
export class CreateSpacificationUseCase {
  constructor(
    @inject("SpacificationRepository")
    private specificationsRepository: ISpacificationRepository
    ) {}

  execute({ name, description }: IRequest): void {
    const spacificationAlreadyExists =
      this.specificationsRepository.findByName(name);
    if (spacificationAlreadyExists) {
      throw new Error("Already Exist Specification");
    }
    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
