import {EventRepository} from "../Domain/eventRepository";
import {db} from "../../config/infrastructure/mongo";
import {Event} from "../Domain/event";
import {ObjectId} from "mongodb";

export class MongoEventRepository implements EventRepository {
    async create(event: Event): Promise<string | null> {
        const eventExist = await db.collection<Event>("events").findOne(event);

        if (eventExist) {
            return null;
        }

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

        return new Event(eventDB._id,eventDB.title, eventDB.description, eventDB.price, eventDB.artists);
    }

}