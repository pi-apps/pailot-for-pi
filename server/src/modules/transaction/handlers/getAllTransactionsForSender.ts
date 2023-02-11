import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { getTransactionsEntryForSenderById } from '../services/transaction.services';

export async function getAllTransactionsForSender(req: Request, res: Response) {
	const userUid = req.params.id;
	const reponse = await getTransactionsEntryForSenderById(userUid);

	if (reponse.type === Result.ERROR) {
		return res.status(500).json(reponse);
	}

	return res.status(200).json(reponse);
}
