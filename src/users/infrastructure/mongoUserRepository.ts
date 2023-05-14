import {UserRepository} from "../domain/userRepository";
import {User} from "../domain/user";
import {db} from "../../config/infrastructure/mongo"
import {ObjectId} from "mongodb";

export class MongoUserRepository implements UserRepository {
    async getById(userId: string): Promise<User | null> {
        const user = await db.collection<User>("users").findOne({_id: new ObjectId(userId)});

        if (!user) {
            return null;
        }

        return new User(user.email, user.email);
    }

    async getByEmail(email: string): Promise<User | null> {
        const user = await db.collection<User>("users").findOne({email});

        if (!user) {
            return null;
        }

        return new User(user._id.toString(), user.email);
    }
}