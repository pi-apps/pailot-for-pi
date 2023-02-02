import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { createCourierEntry } from '../services/user.services';

export async function createCourier(req: Request, res: Response) {
	const courier = req.body;
	const inserted = await createCourierEntry(courier);

	if (inserted.type === Result.ERROR) {
		return res.status(500).json(inserted);
	}
	return res.status(201).json(inserted);
}
