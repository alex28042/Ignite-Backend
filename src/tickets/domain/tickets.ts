import {ObjectId} from "mongodb";

export class Tickets {
    constructor(readonly GigId: ObjectId, readonly tickets: number) {

    }
}