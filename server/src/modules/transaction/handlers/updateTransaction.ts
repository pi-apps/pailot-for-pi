import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { updateTransactionEntry } from '../services/transaction.services';

export async function updateTransaction(req: Request, res: Response) {
	const trxUId = req.params.id;
	const updateData = req.body;
	if (req.file) {
		updateData.itemImage = req.file.path;
	}
	const response = await updateTransactionEntry(trxUId, updateData);

	if (response.type === Result.ERROR) {
		return res.status(500).json(response);
	}

	if (response.type === Result.NOT_FOUND) {
		return res.status(404).json(response);
	}

	return res.status(200).json(response);
}
