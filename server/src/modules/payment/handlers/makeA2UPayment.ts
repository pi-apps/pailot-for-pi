// import PiNetwork from 'pi-backend';

// const apiKey = process.env.PI_API_KEY;
// const walletPrivateSeed = process.env.WALLET_PRIVATE_SEED;

// export async function makeA2UPayment(req: Request, res: Response): Promise<void> {
// 	const pi = new PiNetwork(apiKey, walletPrivateSeed);

// 	// Get userUid from the database
// 	const userUid = 'user_uid_of_your_app';
// 	const paymentData = {
// 		amount: 1,
// 		memo: 'From app to user test',
// 		metadata: { test: 'your metadata' },
// 		uid: userUid,
// 	};
// 	const paymentId = await pi.createPayment(paymentData);

// 	const txid = await pi.submitPayment(paymentId);

// 	const completedPayment = await pi.completePayment(paymentId, txid);
// }
