import { Response, Request } from "express";
import {UserService} from "../application/userService";
import {User} from "../domain/user";

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

    async create(req: Request, res: Response) {
        const userForInsert =  new User("", req.body.email);

        const user = await this.userService.create(userForInsert);

        res.status(200).send({status: "OK", message: { user }})
    }
}