import {Request, Response} from "express";
import {AuthService} from "../application/authService";
import {User} from "../domain/user";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

export class AuthController {

    constructor(readonly authService: AuthService) {}

    async login(req: Request, res: Response) {
        const userEmail = req.body.email;

        const user = await this.authService.login(userEmail);

        if (!process.env.ACCESS_TOKEN) {
            res.status(404).send({status: "FAILED", data: { message: "Error register" }})
            return;
        }

        res.status(200).send({status: "OK", data: { ...user }})
    }

    async register(req: Request, res: Response) {
        const userRegister = new User("", req.body.email);

        const user = await this.authService.register(userRegister);

        if (!process.env.ACCESS_TOKEN) {
            res.status(404).send({status: "FAILED", data: { message: "Error register" }});
            return;
        }

        res.status(200).send({status: "OK", data: { insertedId: jwt.sign(user, process.env.ACCESS_TOKEN) }});
    }
}