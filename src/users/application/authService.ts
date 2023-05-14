import {MongoAuthRepository} from "../infrastructure/mongoAuthRepository";
import {User} from "../domain/user";

export class AuthService {
    constructor(private readonly authRepository: MongoAuthRepository) {}

    async login(email: string) {
        const user = await this.authRepository.login(email);

        if (!user) {
            throw new Error("Error login user");
        }

        console.log(user.toJson())
        return user;
    }

    async register(user: User) {
        const userRegister = await this.authRepository.register(user);

        if (!userRegister) {
            throw new Error("Error creating user");
        }

        console.log(userRegister)
        return user;
    }
}