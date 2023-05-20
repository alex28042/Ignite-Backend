import {Payment} from "./payment";

export interface PaymentRepository {
    makePayment(payment: Payment): Promise<string | null>;
}