import { ICreateSpacificationDTO } from "../dtos/ICreateSpacificationDTO";
import { Specifications } from "../entities/Spacifications";



export interface ISpacificationRepository {
  create({ name, description }: ICreateSpacificationDTO): Promise<void>;
  findByName(name: string):Promise<Specifications>
}
