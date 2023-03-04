import { Router } from 'express';
import { deleteTransaction } from './handlers/deleteTransaction';
import { getAllTransactions } from './handlers/getAllTransactions';
import { getTransaction } from './handlers/getTransaction';
import { isAuthenticated } from '../../middlewares/session';
import { multerUploadImage, profileImageUpload } from '../../middlewares/multer';
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

transactionRouter.get('/', isAuthenticated, getAllTransactions);
transactionRouter.post('/', profileImageUpload, createTransaction);
transactionRouter.get('/:id', isAuthenticated, getTransaction);
transactionRouter.patch('/:id', isAuthenticated, multerUploadImage, updateTransaction);
transactionRouter.get('/pending', isAuthenticated, getAllPendingTransactions);
transactionRouter.delete('/:id', isAuthenticated, deleteTransaction);
transactionRouter.patch('/status/:id', isAuthenticated, updateTransactionStatus);
transactionRouter.patch('/requests/accept-pending', isAuthenticated, acceptPendingTransaction);
transactionRouter.get('/sender/:id', isAuthenticated, getAllTransactionsForSender);
transactionRouter.get('/courier/:id', isAuthenticated, getAllTransactionsForCourier);
transactionRouter.get('/receiver/:id', isAuthenticated, getAllTransactionsForReceiver);
transactionRouter.get('/username', isAuthenticated, getAllTransactionsForReceiverByUsername);

export const TransactionController = { router: transactionRouter };
