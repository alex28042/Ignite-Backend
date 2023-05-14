export class User {
    constructor(readonly id: string, readonly email: string) {

    }

    toJson(): Object {
        return { email: this.email };
    }
}