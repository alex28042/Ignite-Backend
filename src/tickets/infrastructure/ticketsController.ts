import {Response, Request} from "express";
import {Tickets} from "../domain/tickets";
import {TicketsService} from "../application/ticketsService";

export class TicketsController {

    constructor(readonly ticketsService: TicketsService) {}

    async create(req: Request, res: Response) {
        const ticketsGig = new Tickets(req.body.id, req.body.tickets, "");

        const gigTicketsCreated = await this.ticketsService.create(ticketsGig);

        res.status(200).send({status: "OK", data: { gigTicketsCreated }})
    }

    async getTicketsByGigId(req: Request, res: Response) {
        const gigId = req.params.id;

        const getTickets = await this.ticketsService.getTicketsByGigId(gigId);

        res.status(200).send({status: "OK", data: {gigId: gigId, tickets: getTickets}})
    }
}