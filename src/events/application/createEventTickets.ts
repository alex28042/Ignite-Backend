import {Event} from "../Domain/event";
const uuidv4 = require("uuid/v4");

export class CreateEventTickets {
    ticketsCreator(event: Event) {
        for (let i = 0; i < event.tickets.numberOfTickets; i++)
            event.tickets.ticketId[i] = uuidv4();

        return event;
    }
}