import { Artist } from "./artist";
import {ObjectId} from "mongodb";
import {TicketPriceRange} from "./TicketPriceRange";
import {Tickets} from "./Tickets";

export class Event {
  constructor(
      readonly title: string,
      readonly description: string,
      readonly artists: Artist[],
      readonly ticketPriceRange: TicketPriceRange[],
      readonly userId: string,
      readonly tickets: Tickets,
  ) {}
}
