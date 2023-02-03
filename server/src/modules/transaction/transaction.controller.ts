import { Router } from 'express';
import { deleteTransaction } from './handlers/deleteTransaction';
import { getAllTransactions } from './handlers/getAllTransactions';
import { getTransaction } from './handlers/getTransaction';
import { isAuthenticated } from '../../middlewares/session';

const transactionRouter = Router();

transactionRouter.get('/', isAuthenticated, getAllTransactions);
transactionRouter.get('/:id', isAuthenticated, getTransaction);
transactionRouter.delete('/:id', isAuthenticated, deleteTransaction);

export const TransactionController = { router: transactionRouter };