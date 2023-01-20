import { Router } from 'express';
import { getAllPayments } from './handlers/getAllPayment';

const paymentRouter = Router();

paymentRouter.get('/', getAllPayments);
// paymentRouter.post('/', createPayment);

export const PaymentController = { router: paymentRouter };
