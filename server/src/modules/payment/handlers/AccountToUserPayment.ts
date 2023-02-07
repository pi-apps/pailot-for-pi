import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { accountToUserPayment } from '../services/payment.services';

export async function withdrawPI(req: Request, res: Response) {
	const paymentData = req.body;
	const completedPayment = await accountToUserPayment(paymentData);

	if (completedPayment.type === Result.ERROR) {
		return res.status(500).json(completedPayment);
	}
	if (completedPayment.type === Result.NOT_FOUND) {
		return res.status(404).json(completedPayment);
	}
	return res.status(201).json(completedPayment);
}
