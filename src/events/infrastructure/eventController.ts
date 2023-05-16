import {EventService} from "../application/eventService";
import {Request, Response} from "express";
import {Event} from "../Domain/event";

export class EventController {
    constructor(private readonly eventService: EventService) {}

    async getEventById(req: Request, res: Response) {
        const eventId = req.params.id

        const event = await this.eventService.getEventById(eventId);

        res.status(200).send({ status: "OK", data: { ...event }})
    }

    async create(req: Request, res: Response) {
        const event = new Eve
    }
}