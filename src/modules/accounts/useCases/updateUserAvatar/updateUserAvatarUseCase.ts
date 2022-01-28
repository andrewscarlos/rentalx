import { inject, injectable } from "tsyringe";
import { IRequestAvatar } from "../../interfaces/IRequestAvatar";
import { IUsersRepository } from "../../interfaces/IUsersRepository";

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ userId, avatarFile }: IRequestAvatar): Promise<void> {
    const user = await this.usersRepository.findById(userId);
    user.avatar = avatarFile;

    await this.usersRepository.create(user);
  }
}
