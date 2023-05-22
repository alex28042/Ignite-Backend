import {UserRole} from "./userRole";

export class User {
    constructor(readonly id: string, readonly email: string, readonly role: UserRole.USER) {}
}