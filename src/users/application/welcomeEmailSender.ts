import {UserRepository} from "../domain/userRepository";

export class WelcomeEmailSender {

    constructor(private readonly userRepository: UserRepository) {}

    async run(userId: string) {
        console.log("user", userId)
        const user = await this.userRepository.getById(userId);

        if (!user) {
            throw new Error("userId not found");
        }

        console.log("User", user.email);
    }
}