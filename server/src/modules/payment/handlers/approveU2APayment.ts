import { Request, Response } from 'express';
import { platformAPIClient } from '../../../utils/platformAPIClient';

export async function approveU2APayment(req: Request, res: Response): Promise<Response<any>> {
	const paymentId = req.body.paymentId;
	await platformAPIClient.post(`/v2/payments/${paymentId}/approve`, {});
	return res.status(200).json({ message: `Approved the payment ${paymentId}` });
}
