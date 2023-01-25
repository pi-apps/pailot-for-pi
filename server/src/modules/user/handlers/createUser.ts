import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { createUserEntry } from '../services/user.services';

export async function createUser(req: Request, res: Response): Promise<void> {
	const inserted = await createUserEntry({
		username: req.body.username,
		userUid: req.body.userUid,
	});

	if (inserted.type === Result.ERROR) {
		res.status(500).json(inserted);
	}
	res.status(201).json(inserted);
}
