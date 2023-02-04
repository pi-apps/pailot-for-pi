import { Router } from 'express';
import { PaymentController } from './payment/payment.controller';
import { TransactionController } from './transaction/transaction.controller';
import { UserController } from './user/user.controller';

const router = Router();

router.use('/payment', PaymentController.router);
router.use('/user', UserController.router);
router.use('/transaction', TransactionController.router);

export const apiRouter = router;
