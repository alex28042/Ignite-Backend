import express from "express";
import {userController} from "./dependencies";
const userRouter = express.Router();

userRouter.get("/:id", userController.getUserById.bind(userController));

export { userRouter };