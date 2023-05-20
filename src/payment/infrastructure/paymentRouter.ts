import express from "express";
import {paymentController} from "./dependencies";


const paymentRouter = express.Router();

paymentRouter.post("/", paymentController.makePayment.bind(paymentController));

export { paymentRouter };