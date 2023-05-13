import {UserService} from "../application/userService";
import {UserController} from "./userController";
import {MongoUserRepository} from "./mongoUserRepository";

const userService = new MongoUserRepository();
export const welcomeEmailSender = new UserService(userService);
export const userController = new UserController(welcomeEmailSender);
