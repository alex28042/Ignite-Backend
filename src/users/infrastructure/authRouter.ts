import express from "express";

const authRouter = express.Router();

authRouter
    .post("/register")
    .post("/login");

export { authRouter }