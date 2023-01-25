import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { updateUserEntry } from '../services/user.services';

export async function updateUser(req: Request, res: Response): Promise<void> {
	const userUid = req.params.id;
	const userData = req.body;
	const updateResult = await updateUserEntry(userUid, userData);

	if (updateResult.type === Result.ERROR) {
		res.status(500).json(updateResult);
	}

	res.status(200).json(updateResult);
}
