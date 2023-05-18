import {TicketsRepository} from "../domain/ticketsRepository";
import {Tickets} from "../domain/tickets";
import {db} from "../../config/infrastructure/mongo";

export class MongoTicketsRepository implements TicketsRepository {
    async create(ticketsGig: Tickets): Promise<string | null> {
        const ticketsForGigExists = await db.collection<Tickets>("tickets").findOne(ticketsGig.gigId);

        if (ticketsForGigExists) {
            return null;
        }

        const ticketsForInsert = await db.collection<Tickets>("tickets").insertOne(ticketsGig);

        if (!ticketsForInsert) {
            return null;
        }

        return ticketsForInsert.insertedId.toString();
    }

    async getTicketsByGigId(gigId: string): Promise<number | null> {
        const getGig = await db.collection<Tickets>("tickets").findOne({ gigId: new Object(gigId) });

        if (!getGig) {
            return null;
        }

        return getGig.tickets;
    }

}