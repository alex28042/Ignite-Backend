import {EventRepository} from "../Domain/eventRepository";
import {db} from "../../config/infrastructure/mongo";
import {Event} from "../Domain/event";
import {ObjectId} from "mongodb";
import {Tickets} from "../Domain/Tickets";

export class MongoEventRepository implements EventRepository {
    async create(event: Event): Promise<string | null> {
        const eventInserted = await db.collection<Event>("events").insertOne(event)

        if (!eventInserted) {
            return null;
        }

        return eventInserted.insertedId.toString();
    }

    async getEventById(eventId: string): Promise<Event | null> {
        const eventDB = await db.collection<Event>("events").findOne({_id: new ObjectId(eventId)})

        if (!eventDB) {
            return null;
        }

        return new Event(eventDB.title, eventDB.description, eventDB.artists, eventDB.ticketPriceRange, eventDB.userId, new Tickets(eventDB.tickets.numberOfTickets, eventDB.tickets.ticketId));
    }
}