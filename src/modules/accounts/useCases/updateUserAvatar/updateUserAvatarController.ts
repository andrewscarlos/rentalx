import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./updateUserAvatarUseCase";
export class UpdatedUserAvatarController {
  async handle(request: Request, response: Response):Promise<Response> {
    const { id } = request.user;
    const avatarFile = request.file.filename;
    const updatedUserAvatar = container.resolve(UpdateUserAvatarUseCase);
    await updatedUserAvatar.execute({ userId: id, avatarFile });
    return response.status(204).send();
  }
}
