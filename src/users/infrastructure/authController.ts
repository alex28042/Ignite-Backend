import {Request, Response} from "express";
import {AuthService} from "../application/authService";
import {User} from "../domain/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import {UserRole} from "../domain/userRole";
import {TokenService} from "./tokenService";
dotenv.config();

export class AuthController {

    constructor(readonly authService: AuthService, readonly tokenService: TokenService) {}

    async login(req: Request, res: Response) {
        const userEmail = req.body.email;

        const user = await this.authService.login(userEmail);

        if (!process.env.ACCESS_TOKEN) {
            res.status(404).send({status: "FAILED", data: { message: "Error register" }})
            return;
        }



        res.status(200).send({status: "OK", data: { token: this.tokenService.generateUserToken(user) }})
    }

    async register(req: Request, res: Response) {
        const userRegister = new User("", req.body.email, req.body.role);

        const user = await this.authService.register(userRegister);

        if (!process.env.ACCESS_TOKEN) {
            res.status(404).send({status: "FAILED", data: { message: "Error register" }});
            return;
        }

        const userToken = {
            token: jwt.sign({user, role: UserRole.USER}, process.env.ACCESS_TOKEN)
        }

        res.status(200).send({status: "OK", data: { token: this.tokenService.generateUserToken(user) }});
    }
}