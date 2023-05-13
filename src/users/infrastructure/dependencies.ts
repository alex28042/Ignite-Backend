import {WelcomeEmailSender} from "../application/welcomeEmailSender";
import {UserController} from "./userController";
import {UserService} from "./userService";

const userService = new UserService();
export const welcomeEmailSender = new WelcomeEmailSender(userService);
export const userController = new UserController(welcomeEmailSender);
