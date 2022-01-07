import { Specification } from "../model/Spacification";

export interface ICreateSpacificationDTO {
  name: string;
  description: string;
}

export interface ISpacificationRepository {
  create({ name, description }: ICreateSpacificationDTO): void;
  findByName(name: string):Specification
}
