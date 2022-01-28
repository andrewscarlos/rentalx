import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensoureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdatedUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/updateUserAvatarController";

const usersRouter = Router();
const createUserController = new CreateUserController();
const updatedUserAvatarController = new UpdatedUserAvatarController();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))
usersRouter.post("/", createUserController.handle);
usersRouter.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), updatedUserAvatarController.handle);
export { usersRouter };
