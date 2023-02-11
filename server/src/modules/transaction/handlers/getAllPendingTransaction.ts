import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { getAllPendingTransaction } from '../services/transaction.services';

export async function getAllPendingTransactions(req: Request, res: Response) {
	const reponse = await getAllPendingTransaction();

	if (reponse.type === Result.ERROR) {
		return res.status(500).json(reponse);
	}

	return res.status(200).json(reponse);
}
