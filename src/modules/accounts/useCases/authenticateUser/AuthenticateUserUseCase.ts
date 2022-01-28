import { inject, injectable } from "tsyringe";
import { IRequest } from "../../interfaces/IRequest";
import { IUsersRepository } from "../../interfaces/IUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IResponse } from "../../interfaces/IResponse";
import { AppError } from "../../../../err/AppError";

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, "3fed4e3e33724a71a255dc7275bc7fc", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
    return tokenReturn;
  }
}
