import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../err/AppError";
import { UserRepository } from "../modules/accounts/repositories/UserRepository";
import { IPayload } from "./IPayload";

export const  ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // Bearer token

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token Missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      "3fed4e3e33724a71a255dc7275bc7fc"
    ) as IPayload;

    const userRepository = new UserRepository();
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new AppError("User does not exists!", 401);
    }
    request.user = {
      id: userId,
    };
    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
};
