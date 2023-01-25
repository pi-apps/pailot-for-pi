// import axios from 'axios';
import { Request, Response } from 'express';
import { platformAPIClient } from '../../../utils/platformAPIClient';

export async function incompleteU2APayment(req: Request, res: Response): Promise<void> {
	try {
		const payment = req.body.payment;
		const paymentId = payment.identifier;
		const txid = payment.transaction && payment.transaction.txid;
		// const txURL = payment.transaction && payment.transaction._link;

		/* check the transaction on the Pi blockchain */
		// const horizonResponse = await axios.create({ timeout: 20000 }).get(txURL);
		// const paymentIdOnBlock = horizonResponse.data.memo;

		await platformAPIClient.post(`/v2/payments/${paymentId}/complete`, { txid });
		res.status(200).json({ message: `Handled the incomplete payment ${paymentId}` });
	} catch (error) {
		res.status(500).json({ message: `An error occured while trying to complete payment` });
	}
}
