import {WelcomeEmailSender} from "../application/welcomeEmailSender";
import {UserController} from "./userController";
import {MongoUserRepository} from "./mongoUserRepository";

const userService = new MongoUserRepository();
export const welcomeEmailSender = new WelcomeEmailSender(userService);
export const userController = new UserController(welcomeEmailSender);
