import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { deleteCourierEntry } from '../services/user.services';

export async function deleteCourier(req: Request, res: Response) {
	const courierUid = req.params.id;
	const deleteResult = await deleteCourierEntry(courierUid);

	if (deleteResult.type === Result.ERROR) {
		return res.status(500).json(deleteResult);
	}

	return res.status(200).json(deleteResult);
}
