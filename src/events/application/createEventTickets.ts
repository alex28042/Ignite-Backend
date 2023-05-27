import {Event} from "../Domain/event";
import {randomUUID} from "crypto";


export class CreateEventTickets {
    ticketsCreator(event: Event) {
        for (let i = 0; i < event.tickets.numberOfTickets; i++)
            event.tickets.ticketId[i] = randomUUID();

        return event;
    }
}