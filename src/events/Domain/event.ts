import { Artist } from "./artist";
import {ObjectId} from "mongodb";

export class Event {
  constructor(
      readonly title: string,
      readonly description: string,
      readonly price: number,
      readonly artists: Artist[]
  ) {}
}
