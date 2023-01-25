import { Router } from 'express';
import { approveU2APayment } from './handlers/approveU2APayment';
import { completeU2APayment } from './handlers/completeU2APayment';
import { getAllPayments } from './handlers/getAllPayment';
import { incompleteU2APayment } from './handlers/incompleteU2APayment';
// import { makeA2UPayment } from './handlers/makeA2UPayment';

const paymentRouter = Router();

paymentRouter.get('/', getAllPayments);
paymentRouter.post('/approve', approveU2APayment);
paymentRouter.post('/incomplete', incompleteU2APayment);
paymentRouter.post('/complete', completeU2APayment);
// paymentRouter.get('/pay-dispatcher', makeA2UPayment);

export const PaymentController = { router: paymentRouter };
