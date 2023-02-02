import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { CreateUserDTO } from '../../../interfaces/user';
import { createUserEntry } from '../services/user.services';

export async function createUser(req: Request, res: Response) {
	console.log(req.body);
	const auth: CreateUserDTO = req.body;
	const inserted = await createUserEntry(auth);

	if (inserted.type === Result.ERROR) {
		return res.status(500).json(inserted);
	}
	return res.status(201).json(inserted);
}
