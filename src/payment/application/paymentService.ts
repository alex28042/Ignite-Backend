import {MongoPaymentRepository} from "../infrastructure/mongoPaymentRepository";
import {Payment} from "../domain/payment";

export class PaymentService {
    constructor(readonly paymentRepository: MongoPaymentRepository) {}

    async makePayment(payment: Payment) {
        const paymentDone = await this.paymentRepository.makePayment(payment);

        if (!paymentDone) {
            throw new Error("error payment")
        }

        return paymentDone;
    }
}