import {UserService} from "../application/userService";
import {UserController} from "./userController";
import {MongoUserRepository} from "./mongoUserRepository";
import {MongoAuthRepository} from "./mongoAuthRepository";
import {AuthService} from "../application/authService";
import {AuthController} from "./authController";

const mongoUserRepository = new MongoUserRepository();
export const userService = new UserService(mongoUserRepository);
export const userController = new UserController(userService);

const mongoAuthRepository = new MongoAuthRepository();
export const authService = new AuthService(mongoAuthRepository);
export const authController = new AuthController(authService);