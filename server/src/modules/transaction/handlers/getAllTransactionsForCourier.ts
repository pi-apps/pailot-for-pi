import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { getTransactionsEntryForCourierId } from '../services/transaction.services';

export async function getAllTransactionsForCourier(req: Request, res: Response) {
	const userUid = req.params.id;
	const reponse = await getTransactionsEntryForCourierId(userUid);

	if (reponse.type === Result.ERROR) {
		return res.status(500).json(reponse);
	}

	return res.status(200).json(reponse);
}
