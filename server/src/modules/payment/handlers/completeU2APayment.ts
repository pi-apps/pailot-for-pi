import { Request, Response } from 'express';
import { platformAPIClient } from '../../../utils/platformAPIClient';

export async function completeU2APayment(req: Request, res: Response): Promise<void> {
	const paymentId = req.body.paymentId;
	const txid = req.body.txid;

	/* let Pi server know that the payment is completed */
	await platformAPIClient.post(`/v2/payments/${paymentId}/complete`, { txid });
	res.status(200).json({ message: `Completed the payment ${paymentId}` });
}
