import {UserService} from "../application/userService";
import {UserController} from "./userController";
import {MongoUserRepository} from "./mongoUserRepository";

const mongoUserRepository = new MongoUserRepository();
export const userService = new UserService(mongoUserRepository);
export const userController = new UserController(userService);
