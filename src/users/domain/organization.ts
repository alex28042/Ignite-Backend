import {UserRole} from "./userRole";

export class Organization {
    constructor(readonly email: string, readonly password: string, readonly name: string, readonly role: UserRole.ORGANIZATION) {}
}