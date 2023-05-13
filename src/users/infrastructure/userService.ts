import {UserRepository} from "../domain/userRepository";
import {User} from "../domain/user";

export class UserService implements UserRepository{
    async getById(userId: string): Promise<User | null> {

        const user = new User("a", "g", "d", "d");

        if (!user) {
            return null;
        }

        return user;
    }

}