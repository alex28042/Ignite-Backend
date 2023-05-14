import {AuthRepository} from "../domain/authRepository";
import {db} from "../../config/infrastructure/mongo";
import {User} from "../domain/user";

export class MongoAuthRepository  implements  AuthRepository {
    async login(email: string): Promise<User | null> {
        const userLog = await db.collection<User>("users").findOne({email})

        if (!userLog) {
            return null;
        }

        return new User(userLog._id.toString(), userLog.email);
    }

    async register(user: User): Promise<string | null> {
        const userExists = await db.collection<User>("users").findOne({ email: user.email })

        if (userExists) {
            return null;
        }

        const userRegistered = await db.collection<User>("users").insertOne(user);

        if (!userRegistered) {
            return null;
        }

        return userRegistered.insertedId.toString();
    }

}