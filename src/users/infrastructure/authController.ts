import {Request, Response} from "express";
import {AuthService} from "../application/authService";
import {User} from "../domain/user";

export class AuthController {

    constructor(readonly authService: AuthService) {}
    async login(req: Request, res: Response) {
        const userEmail = req.body.email;

        const user = await this.authService.login(userEmail);

        res.status(200).send({status: "OK", data: { ...user }})
    }

    async register(req: Request, res: Response) {
        const userRegister = new User("", req.body.email);

        const user = await this.authService.register(userRegister);

        res.status(200).send({status: "OK", data: { insertedId: user }})
    }
}