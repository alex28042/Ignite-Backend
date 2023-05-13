import { WelcomeEmailSender } from "../application/welcomeEmailSender";
import { Response, Request } from "express";

export class UserController {
    constructor(private readonly welcomeEmailSender: WelcomeEmailSender) {

    }

    async run(req: Request, res: Response) {
        const userId = req.params.id;

        await this.welcomeEmailSender.run(userId);

        res.status(200).send("Email send")
    }
}