import {Request, Response} from "express";
import {AuthService} from "../application/authService";
import {User} from "../domain/user";
import dotenv from "dotenv"
import {UserRole} from "../domain/userRole";
import {TokenService} from "./tokenService";

dotenv.config();

export class AuthController {

    constructor(readonly authService: AuthService, readonly tokenService: TokenService) {}

    async login(req: Request, res: Response) {
        const userEmail = req.body.email;

        const user = await this.authService.login(userEmail);

        res.status(200).send({status: "OK", data: { token: this.tokenService.generateUserToken(user) }})
    }

    async register(req: Request, res: Response) {
        const userRegister = new User("", req.body.email, UserRole.USER);

        const user = await this.authService.register(userRegister);

        res.status(200).send({status: "OK", data: { token: this.tokenService.generateUserToken(user) }});
    }
}