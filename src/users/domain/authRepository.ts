import {User} from "./user";

export interface AuthRepository {
    register(user: User): Promise<string | null>;
    login(email: string): Promise<string | null>;
}