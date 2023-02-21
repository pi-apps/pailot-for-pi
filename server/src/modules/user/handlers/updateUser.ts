import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { updateUserEntry } from '../services/user.services';

export async function updateUser(req: Request, res: Response) {
	const userUid = req.params.id;
	const userData = req.body;
	if (req.file) {
		userData.profileImg = req.file.path;
	}
	const updateResult = await updateUserEntry(userUid, userData);

	if (updateResult.type === Result.ERROR) {
		return res.status(500).json(updateResult);
	}

	return res.status(200).json(updateResult);
}
