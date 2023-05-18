import {Response, Request} from "express";
import {Tickets} from "../domain/tickets";

export class TicketsController {
    async create(req: Request, res: Response) {
        const ticketsGig = new Tickets(req.body.id, req.body.tickets);
    }

    async getTicketsByGigId(req: Request, res: Response) {
        const gigId = req.params.id;
    }
}