import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { updateCourierInfo } from '../services/user.services';

export async function updateCourier(req: Request, res: Response) {
	const courierUid = req.params.id;
	const courierData = req.body;
	const updateResult = await updateCourierInfo(courierUid, courierData);

	if (updateResult.type === Result.ERROR) {
		return res.status(500).json(updateResult);
	}

	return res.status(200).json(updateResult);
}
