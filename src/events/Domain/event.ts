import {Artist} from "./artist";

export class Event {
    constructor(readonly title: string, readonly description: string, readonly price: number, readonly artists: Artist[]) {

    }
}