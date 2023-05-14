import { Response, Request } from "express";
import {UserService} from "../application/userService";

export class UserController {
    constructor(private readonly userService: UserService) {}

    async getUserById(req: Request, res: Response) {
        const userId = req.params.id;

        const user = await this.userService.getUserById(userId);

        res.status(200).send({status: "OK", message: { ...user.toJson() }})
    }

    async getUserByEmail(req: Request, res: Response) {
        const email = req.params.email;

        const user = await this.userService.getUserByEmail(email);

        res.status(200).send({status: "OK", message: { ...user.toJson() }})
    }

}