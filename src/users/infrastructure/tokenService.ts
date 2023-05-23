import jwt from "jsonwebtoken";
import {UserRole} from "../domain/userRole";

export class TokenService {
    generateUserToken(userId: string) {
        return process.env.ACCESS_TOKEN ? jwt.sign({_id: userId, role: UserRole.USER}, process.env.ACCESS_TOKEN) : null;
    }

    generateOrganizationToken(userId: string) {
        return process.env.ACCESS_TOKEN ? jwt.sign({_id: userId, role: UserRole.ORGANIZATION}, process.env.ACCESS_TOKEN) : null;
    }
}