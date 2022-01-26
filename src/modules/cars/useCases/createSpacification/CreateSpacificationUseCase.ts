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

  async execute({ name, description }: IRequest): Promise<void> {
    console.log('bateu na execute')
    const alredyExists = await this.specificationsRepository.findByName(name);
    console.log('alredyExists',alredyExists)
    if (alredyExists) {
      throw new Error("Category Already Exists!");
    }
    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}
