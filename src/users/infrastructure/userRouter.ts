import express from "express";
import {authenticatedEndpoint, userController} from "./dependencies";
import {AuthenticatedEndpoint} from "../../middlewares/application/authenticatedEndpoint";
const userRouter = express.Router();

userRouter
    .get("/getById/:id", authenticatedEndpoint.authenticateUser, userController.getUserById.bind(userController))
    .get("/getByEmail/:email", authenticatedEndpoint.authenticateUser, userController.getUserByEmail.bind(userController))

export { userRouter };