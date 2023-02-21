import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { getTransactionsEntry } from '../services/transaction.services';

export async function getAllTransactions(req: Request, res: Response) {
	const reponse = await getTransactionsEntry();

	if (reponse.type === Result.ERROR) {
		return res.status(500).json(reponse);
	}

	return res.status(200).json(reponse);
}
