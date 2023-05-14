import {User} from "./user";

export interface UserRepository {
    getById(userId: string): Promise<User | null>;
    getByEmail(email: string): Promise<User | null>;
    create(user: User): Promise<string | null>;
}