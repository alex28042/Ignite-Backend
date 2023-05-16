import {MongoEventRepository} from "./mongoEventRepository";
import {EventService} from "../application/eventService";
import {EventController} from "./eventController";

const mongoEventRepository = new MongoEventRepository()

export const eventService = new EventService(mongoEventRepository);
export const eventController = new EventController(eventService);