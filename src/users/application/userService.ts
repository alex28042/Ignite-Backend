import {UserRepository} from "../domain/userRepository";
import {User} from "../domain/user";
import {MongoUserRepository} from "../infrastructure/mongoUserRepository";

export class UserService {

    constructor(private readonly userRepository: MongoUserRepository) {}

    async getUserById(userId: string) {
        const user: User | null = await this.userRepository.getById(userId);

        if (!user) {
            throw new Error("userId not found");
        }

        console.log("User", user.id);
        return user;
    }

    async getUserByEmail(email: string) {
        const user: User | null = await this.userRepository.getByEmail(email);

        if (!user) {
            throw new Error("email not found");
        }

        console.log("User", user.email);
        return user;
    }
}