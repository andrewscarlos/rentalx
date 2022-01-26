import { Specifications } from "../entities/Spacifications";

export interface ICreateSpacificationDTO {
  name: string;
  description: string;
}

export interface ISpacificationRepository {
  create({ name, description }: ICreateSpacificationDTO): Promise<void>;
  findByName(name: string):Promise<Specifications>
}
