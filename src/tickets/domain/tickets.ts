import {ObjectId} from "mongodb";

export class Tickets {
    constructor(readonly gigId: ObjectId, readonly tickets: number) {

    }
}