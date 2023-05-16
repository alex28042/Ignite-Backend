import { MongoAuthRepository } from "../infrastructure/mongoAuthRepository";
import { User } from "../domain/user";

export class AuthService {
  constructor(private readonly authRepository: MongoAuthRepository) {}

  async login(email: string) {
    const user = await this.authRepository.login(email);

    if (!user) {
      throw new Error("Error login user");
    }

    return user;
  }

  async register(user: User) {
    if (!user.email) {
      throw new Error("Error passing email");
    }

    const userRegister = await this.authRepository.register(user);

    if (!userRegister) {
      throw new Error("Error creating user");
    }

    return userRegister;
  }
}
