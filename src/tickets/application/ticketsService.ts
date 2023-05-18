import {MongoTicketsRepository} from "../infrastructure/mongoTicketsRepository";
import {Tickets} from "../domain/tickets";

export class TicketsService {
    constructor(readonly ticketsRepository: MongoTicketsRepository) {}

    async create(ticketsGig: Tickets) {
        const gigInserted = this.ticketsRepository.create(ticketsGig);

        if (!gigInserted) {
            throw new Error("Insert error");
        }

        return gigInserted;
    }

    async getTicketsByGigId(gigId: string) {
        const tickets = this.ticketsRepository.getTicketsByGigId(gigId);

        if (!tickets) {
            throw new Error("Insert error");
        }

        return tickets;
    }
}