import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { getUsersEntry } from '../services/user.services';

export async function getAllUsers(req: Request, res: Response): Promise<void> {
	const usersResult = await getUsersEntry();

	if (usersResult.type === Result.ERROR) {
		res.status(500).json(usersResult);
	}

	res.status(200).json(usersResult);
}
