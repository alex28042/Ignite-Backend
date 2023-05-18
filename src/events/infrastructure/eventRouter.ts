import express from "express";
import {eventController} from "./dependencies";
import {authenticatedEndpoint} from "../../users/infrastructure/dependencies";


const eventRouter = express.Router();

eventRouter
    .get("/eventById/:id", authenticatedEndpoint.authenticateUser, eventController.getEventById.bind(eventController))
    .post("/", authenticatedEndpoint.authenticateUser, eventController.create.bind(eventController))

export { eventRouter }