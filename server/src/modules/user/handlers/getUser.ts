import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { findUser } from '../services/user.services';

export async function getUser(req: Request, res: Response): Promise<void> {
	const userUid = req.params.id;
	const userResult = await findUser(userUid);

	if (userResult.type === Result.ERROR) {
		res.status(500).json(userResult);
	}
	if (userResult.type === Result.NOT_FOUND) {
		res.status(404).json(userResult);
	}

	res.status(200).json(userResult);
}
