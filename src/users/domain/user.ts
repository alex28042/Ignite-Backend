export class User {
    constructor(readonly id: string, readonly email: string) {

    }

    toJson(): Object {
        return { id: this.id, email: this.email };
    }
}