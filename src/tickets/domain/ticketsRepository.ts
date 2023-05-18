import {Tickets} from "./tickets";

export interface TicketsRepository {
    create(ticketsGig: Tickets): Promise<string | null>
    getTicketsByGigId(gigId: string): Promise<number | null>
}