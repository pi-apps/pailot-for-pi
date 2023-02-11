import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { updateDeliverystatus } from '../services/transaction.services';

export async function updateTransactionStatus(req: Request, res: Response) {
	const trxUId = req.params.id;
	const status = req.body;
	const response = await updateDeliverystatus(trxUId, status);

	if (response.type === Result.ERROR) {
		return res.status(500).json(response);
	}

	return res.status(200).json(response);
}
