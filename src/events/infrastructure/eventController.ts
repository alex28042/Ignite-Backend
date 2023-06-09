import {EventService} from "../application/eventService";
import e, {Request, Response} from "express";
import {Event} from "../Domain/event";
import {ObjectId} from "mongodb";
import {Tickets} from "../Domain/Tickets";

export class EventController {
    constructor(private readonly eventService: EventService) {}

    async getEventById(req: Request, res: Response) {
        const eventId = req.params.id

        const event = await this.eventService.getEventById(eventId);

        res.status(200).send({ status: "OK", data: { ...event }})
    }

    async create(req: Request, res: Response) {
        const event = new Event(req.body.title, req.body.description, req.body.artists, req.body.ticketsPriceRange, req.body.user._id, new Tickets(req.body.numberOfTickets, [], []));

        const eventInserted = await this.eventService.create(event);

        if (!eventInserted) {
            res.status(404).send({status: "FAILED", message: { message: "Error creating event" }})
        }

        res.status(200).send({ status: "OK", data: { eventInserted, ...event }})
    }
}