import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { incompleteUserToAppPayment } from '../services/payment.services';

export async function incompleteU2APayment(req: Request, res: Response) {
	const payment = req.body.payment;
	const incompletePayment = await incompleteUserToAppPayment(payment);
	if (incompletePayment.type === Result.ERROR && incompletePayment.error) {
		return res.status(500).json(incompletePayment);
	}
	if (incompletePayment.type === Result.ERROR) {
		return res.status(400).json(incompletePayment);
	}
	if (incompletePayment.type === Result.NOT_FOUND) {
		return res.status(404).json(incompletePayment);
	}
	return res.status(200).json(incompletePayment);
}
