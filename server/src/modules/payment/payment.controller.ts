import { Router } from 'express';
import { isAuthenticated } from '../../middlewares/session';
import { approveU2APayment } from './handlers/approveU2APayment';
import { completeU2APayment } from './handlers/completeU2APayment';
import { incompleteU2APayment } from './handlers/incompleteU2APayment';
import { withdrawPI } from './handlers/AccountToUserPayment';
import { cancelledU2APayment } from './handlers/cancelledU2APayment';

const paymentRouter = Router();

paymentRouter.post('/approve', isAuthenticated, approveU2APayment);
paymentRouter.post('/incomplete', isAuthenticated, incompleteU2APayment);
paymentRouter.post('/complete', isAuthenticated, completeU2APayment);
paymentRouter.post('/cancel', isAuthenticated, cancelledU2APayment);
paymentRouter.get('/courier/withdraw', isAuthenticated, withdrawPI);

export const PaymentController = { router: paymentRouter };
