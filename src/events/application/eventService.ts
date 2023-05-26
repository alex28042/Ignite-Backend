import {MongoEventRepository} from "../infrastructure/mongoEventRepository";
import {Event} from "../Domain/event";
import {CreateEventTickets} from "./createEventTickets";

export class EventService {
    constructor(private readonly eventRepository: MongoEventRepository) {}

    async create(event: Event) {
        const eventWithTicketsCreated = await new CreateEventTickets().ticketsCreator(event);

        console.log(eventWithTicketsCreated);

        const eventCreated = await this.eventRepository.create(eventWithTicketsCreated);

        if (!eventCreated) {
            throw new Error("Error login user");
        }

        return eventCreated;
    }

    async getEventById(eventId: string) {
        if (!eventId) {
            throw new Error("Error passing id");
        }

        const getEvent = await this.eventRepository.getEventById(eventId);

        if (!getEvent) {
            throw new Error("Error finding out event");
        }

        return getEvent;
    }
}