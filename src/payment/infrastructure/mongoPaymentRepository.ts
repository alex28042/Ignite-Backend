import {PaymentRepository} from "../domain/paymentRepository";
import {db} from "../../config/infrastructure/mongo";
import {Payment} from "../domain/payment";

export class MongoPaymentRepository implements PaymentRepository{
    async makePayment(payment: Payment): Promise<string | null> {
        const paymentInsert = await db.collection<Payment>("payments").insertOne(payment);

        if (!paymentInsert) {
            return null;
        }

        return paymentInsert.insertedId.toString();
    }
}