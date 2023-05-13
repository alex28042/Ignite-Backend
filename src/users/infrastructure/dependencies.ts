import {WelcomeEmailSender} from "../application/welcomeEmailSender";
import {UserController} from "./userController";

export const welcomeEmailSender = new WelcomeEmailSender();
export const userController = new UserController(welcomeEmailSender);