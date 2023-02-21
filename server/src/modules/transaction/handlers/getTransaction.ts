import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { getTransactionEntry } from '../services/transaction.services';

export async function getTransaction(req: Request, res: Response) {
	const trxUId = req.params.id;
	const response = await getTransactionEntry(trxUId);

	if (response.type === Result.ERROR) {
		return res.status(500).json(response);
	}
	if (response.type === Result.NOT_FOUND) {
		return res.status(404).json(response);
	}

	return res.status(200).json(response);
}
