import { Artist } from "./artist";
import {ObjectId} from "mongodb";
import {TicketPriceRange} from "./TicketPriceRange";

export class Event {
  constructor(
      readonly title: string,
      readonly description: string,
      readonly price: number,
      readonly artists: Artist[],
      readonly ticketPriceRange: TicketPriceRange[]
  ) {}
}
