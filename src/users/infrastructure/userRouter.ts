import express from "express";
import {userController} from "./dependencies";
const userRouter = express.Router();

userRouter
    .get("/getById/:id", userController.getUserById.bind(userController))
    .get("/getByEmail/:email", userController.getUserByEmail.bind(userController))
    .post("/", userController.create.bind(userController));

export { userRouter };