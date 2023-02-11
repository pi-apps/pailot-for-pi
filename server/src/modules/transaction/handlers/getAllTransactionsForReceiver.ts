import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { getTransactionsEntryForReceiverById } from '../services/transaction.services';
import { getTransactionsEntryForReceiverByUsername } from '../services/transaction.services';

export async function getAllTransactionsForReceiver(req: Request, res: Response) {
	const userUid = req.params.id;
	const reponse = await getTransactionsEntryForReceiverById(userUid);

	if (reponse.type === Result.ERROR) {
		return res.status(500).json(reponse);
	}

	return res.status(200).json(reponse);
}

export async function getAllTransactionsForReceiverByUsername(req: Request, res: Response) {
	const username = req.params.username;
	const reponse = await getTransactionsEntryForReceiverByUsername(username);

	if (reponse.type === Result.ERROR) {
		return res.status(500).json(reponse);
	}

	return res.status(200).json(reponse);
}
