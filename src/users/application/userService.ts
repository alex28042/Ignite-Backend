import {UserRepository} from "../domain/userRepository";
import {User} from "../domain/user";
import {MongoUserRepository} from "../infrastructure/mongoUserRepository";

export class UserService {

    constructor(private readonly userRepository: MongoUserRepository) {}

    async getUserById(userId: string) {
        console.log(userId)
        const user: User | null = await this.userRepository.getById(userId);

        if (!user) {
            throw new Error("userId not found");
        }

        console.log("User", user.email);
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
    async create(user: User) {
        if (!user || !user.email) {
            throw new Error("User doesnt exists or error passing user");
        }

        const userInserted: string | null = await this.userRepository.create(user);

        if (!userInserted) {
            throw new Error("userId not found");
        }

        console.log("User", user.email);
        return userInserted;
    }
}