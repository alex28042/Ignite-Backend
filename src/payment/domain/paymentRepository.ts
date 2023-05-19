export interface PaymentRepository {
    makePayment(quantity: number): Promise<string | null>;
}