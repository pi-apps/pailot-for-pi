import { Router } from 'express';
import { deleteTransaction } from './handlers/deleteTransaction';
import { getAllTransactions } from './handlers/getAllTransactions';
import { getTransaction } from './handlers/getTransaction';
import { isAuthenticated } from '../../middlewares/session';
import { multerUploadImage } from '../../middlewares/multer';
import { createTransaction } from './handlers/createTransaction';
import { updateTransactionStatus } from './handlers/updateTransactionStatus';
import { acceptPendingTransaction } from './handlers/acceptPendingTransaction';
import { updateTransaction } from './handlers/updateTransaction';
import { getAllPendingTransactions } from './handlers/getAllPendingTransaction';
import { getAllTransactionsForSender } from './handlers/getAllTransactionsForSender';
import { getAllTransactionsForCourier } from './handlers/getAllTransactionsForCourier';
import { getAllTransactionsForReceiver } from './handlers/getAllTransactionsForReceiver';
import { getAllTransactionsForReceiverByUsername } from './handlers/getAllTransactionsForReceiver';

const transactionRouter = Router();

transactionRouter.post('/', isAuthenticated, multerUploadImage, createTransaction);
transactionRouter.get('/', isAuthenticated, getAllTransactions);
transactionRouter.get('/pending', isAuthenticated, getAllPendingTransactions);
transactionRouter.get('/:id', isAuthenticated, getTransaction);
transactionRouter.patch('/:id', isAuthenticated, multerUploadImage, updateTransaction);
transactionRouter.patch('/status/:id', isAuthenticated, updateTransactionStatus);
transactionRouter.patch('/requests/accept-pending', isAuthenticated, acceptPendingTransaction);
transactionRouter.delete('/:id', isAuthenticated, deleteTransaction);
transactionRouter.get('/:id', isAuthenticated, getAllTransactionsForSender);
transactionRouter.get('/:id', isAuthenticated, getAllTransactionsForCourier);
transactionRouter.get('/:id', isAuthenticated, getAllTransactionsForReceiver);
transactionRouter.get('/username', isAuthenticated, getAllTransactionsForReceiverByUsername);

export const TransactionController = { router: transactionRouter };
