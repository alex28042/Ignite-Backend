import {Response, Request} from "express";
import {Payment} from "../domain/payment";
import {PaymentService} from "../application/paymentService";

export class PaymentController {
    constructor(readonly paymentService: PaymentService) {}

    async makePayment(req: Request, res: Response) {
        const payment = new Payment(req.body.quantity);

        const paymentInserted = await this.paymentService.makePayment(payment);

        res.status(200).send({status: "OK", data: {...payment}})
    }
}