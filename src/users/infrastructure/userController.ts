import { UserService } from "../application/userService";
import { Response, Request } from "express";

export class UserController {
    constructor(private readonly userService: UserService) {

    }

    async getUserById(req: Request, res: Response) {
        const userId = req.params.id;

        await this.userService.getUserById(userId);

        res.status(200).send("Email send")
    }
}