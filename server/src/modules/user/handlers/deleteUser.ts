import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { deleteUserEntry } from '../services/user.services';

export async function deleteUser(req: Request, res: Response): Promise<void> {
	const userUid = req.params.id;
	const deleteResult = await deleteUserEntry(userUid);

	if (deleteResult.type === Result.ERROR) {
		res.status(500).json(deleteResult);
	}

	res.status(200).json(deleteResult);
}
