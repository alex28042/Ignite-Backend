import express from "express";
import {authController} from "./dependencies";

const authRouter = express.Router();

authRouter
    .post("/register", authController.register.bind(authController))
    .post("/login", authController.login.bind(authController));

export { authRouter }