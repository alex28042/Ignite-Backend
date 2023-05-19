import {UserService} from "../application/userService";
import {UserController} from "./userController";
import {MongoUserRepository} from "./mongoUserRepository";
import {MongoAuthRepository} from "./mongoAuthRepository";
import {AuthService} from "../application/authService";
import {AuthController} from "./authController";
import {AuthenticatedEndpoint} from "../../middlewares/application/authenticatedEndpoint";
import {MongoOrganizationRepository} from "./mongoOrganizationRepository";
import {OrganizationService} from "../application/organizationService";
import {OrganizationController} from "./organizationController";

const mongoUserRepository = new MongoUserRepository();
export const userService = new UserService(mongoUserRepository);
export const userController = new UserController(userService);

const mongoAuthRepository = new MongoAuthRepository();
export const authService = new AuthService(mongoAuthRepository);
export const authController = new AuthController(authService);

export const authenticatedEndpoint = new AuthenticatedEndpoint();


const mongoOrganizationRepository = new MongoOrganizationRepository();
export const organizationService = new OrganizationService(mongoOrganizationRepository);
export const organizationController = new OrganizationController(organizationService);