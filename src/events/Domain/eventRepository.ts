import {Event} from "./event";

export interface EventRepository {
    create(event: Event): Promise<string | null>;
    getEventById(eventId: string): Promise<Event | null>;
}