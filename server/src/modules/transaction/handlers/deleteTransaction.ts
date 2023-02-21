import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { deleteTransactionEntry } from '../services/transaction.services';

export async function deleteTransaction(req: Request, res: Response) {
	const trxUid = req.params.id;
	const response = await deleteTransactionEntry(trxUid);

	if (response.type === Result.ERROR) {
		return res.status(500).json(response);
	}

	return res.status(200).json(response);
}
