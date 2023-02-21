import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { cancelledUserToAppPayment } from '../services/payment.services';

export async function cancelledU2APayment(req: Request, res: Response) {
	const paymentId = req.body.paymentId;
	const result = await cancelledUserToAppPayment(paymentId);

	if (result.type === Result.ERROR) {
		return res.status(500).json(result);
	}
	return res.status(200).json(result);
}
