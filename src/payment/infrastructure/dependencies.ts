import {MongoPaymentRepository} from "./mongoPaymentRepository";
import {PaymentService} from "../application/paymentService";
import {PaymentController} from "./paymentController";

const paymentRepository = new MongoPaymentRepository()
export const paymentService =  new PaymentService(paymentRepository)
export const paymentController = new PaymentController(paymentService);