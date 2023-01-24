import axios from 'axios';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const StellarSdk = require('stellar-sdk');

interface OptionsProps {
	baseUrl: string;
}

interface IPayment {
	identifier: string;
	user_uid: string;
	amount: number;
	memo: string;
	metadata: Record<string, any>;
	from_address: string;
	to_address: string;
	direction: string;
	created_at: string;
	network: string;
	status: {
		developer_approved: boolean;
		transaction_verified: boolean;
		developer_completed: boolean;
		cancelled: boolean;
		user_cancelled: boolean;
	};
	transaction: {
		txid: string;
		verified: boolean;
		_link: string;
	} | null;
}

interface IPaymentData {
	amount: number;
	memo: string;
	metadata: Record<string, any>;
	uid: string;
}

export class PiNetwork {
	private apiKey: string;
	private client: Record<any, any>;
	private account: Record<string, any>;
	private baseUrl: string;
	private fromAddress: string;
	private walletPublicKey: string;
	private openAccount: Map<string, IPayment>;

	constructor(apiKey: string, walletPublicKey: string, options: OptionsProps) {
		this.apiKey = apiKey;
		this.walletPublicKey = walletPublicKey;
		this.baseUrl = options.baseUrl || 'https://api.minepi.com';
		this.openAccount = new Map();
	}

	async getPayment(paymentId: string): Promise<IPayment> {
		try {
			const response = await axios.get(`${this.baseUrl}/v2/payments/${paymentId}`, {
				headers: {
					...this.httpHeaders(),
				},
			});
			return response.data;
		} catch (error) {
			if (error.response && error.response.status === 404) {
				throw new Error(`Payment not found for ${paymentId}`);
			}
			throw new Error('An unknown error occurred while fetching the payment');
		}
	}

	async createPayment(paymentData: IPaymentData): Promise<string> {
		this.validatePaymentData(paymentData, { amount: true, memo: true, metadata: true, uid: true });
		const requestBody = {
			payment: paymentData,
		};

		try {
			const response = await axios.post(`${this.baseUrl}/v2/payments`, requestBody, {
				headers: {
					...this.httpHeaders(),
				},
			});
			const identifier = response.data.identifier;
			this.openAccount[identifier] = response.data;

			return identifier;
		} catch (error) {
			if (error.response) {
				throw new Error(`${error.response.data}`);
			}
			throw new Error(`${error.message}`);
		}
	}

	async submitPayment(paymentId: string) {
		let payment = this.openAccount.get(paymentId);

		if (payment === null) {
			payment = await this.getPayment(paymentId);
		}

		await this.setHorizonClient(payment.network);
		this.fromAddress = payment.from_address;

		const transactionData = {
			amount: payment.amount,
			identifier: payment.identifier,
			recipient: payment.to_address,
		};

		const transaction = await this.buildA2UTransaction(transactionData);
		const txid = await this.submitTransaction(transaction);

		this.openAccount.delete(paymentId);

		return txid;
	}

	async completePayment(identifier: string, txid: string): Promise<IPayment> {
		const body = {
			txid: txid,
		};
		try {
			const response = await axios.post(
				`${this.baseUrl}/v2/payments/${identifier}/complete`,
				body,
				{
					headers: {
						...this.httpHeaders(),
					},
				}
			);
			return response.data;
		} catch (error) {
			if (error.response) {
				throw new Error(`${error.response.data}`);
			}
			throw new Error(`${error.message}`);
		}
	}

	async cancelPayment(identifier: string): Promise<IPayment> {
		try {
			const response = await axios.post(
				`${this.baseUrl}/v2/payments/${identifier}/cancel`,
				{},
				{
					headers: {
						...this.httpHeaders(),
					},
				}
			);
			return response.data;
		} catch (error) {
			if (error.response) {
				throw new Error(`${error.response.data}`);
			}
			throw new Error(`${error.message}`);
		}
	}

	async getIncompleteServerPayments(): Promise<IPayment[]> {
		try {
			const response = await axios.get(`${this.baseUrl}/v2/payments/incomplete_server_payments`, {
				headers: {
					...this.httpHeaders(),
				},
			});
			const res = response.data;
			return res.incomplete_server_payments;
		} catch (error) {
			if (error.response) {
				throw new Error(`${error.response.data}`);
			}
			throw new Error(`${error.message}`);
		}
	}

	// Private Methods

	private httpHeaders() {
		return this.apiKey !== null
			? {
					Authorization: `Key ${this.apiKey}`,
					'Content-Type': 'application/json',
			  }
			: null;
	}

	private async setHorizonClient(network: string) {
		const horizon =
			network == 'Pi Network' ? 'https://api.mainnet.minepi.com' : 'https://api.testnet.minepi.com';
		const client = new StellarSdk.Server(horizon);
		// console.log(client);
		// StellarSdk.default_network = network // check backkkk

		this.client = client;
		this.account = await this.loadAccount(this.client, this.walletPublicKey);
		console.log(this.client);
	}

	private async loadAccount(client, publicKey: string) {
		const account = await client.loadAccount(publicKey);
		return account;
	}

	private async buildA2UTransaction(transactionData: Record<string, any>) {
		if (this.fromAddress !== this.account.address) {
			throw new Error('You should use a private seed of your app wallet!');
		}
		this.validatePaymentData(transactionData, { amount: true, identifier: true, recipient: true });

		// TODO: get this from horizon
		const fee = 100000; // 0.01π
		const memo = new StellarSdk.Memo('MemoText', transactionData.identifier);

		const paymentOperation = StellarSdk.Operation.payment({
			destination: transactionData.recipient,
			amount: transactionData.amount,
		});
		const transactionBuilder = new StellarSdk.TransactionBuilder(this.account, {
			fee,
			memo,
		});

		const transaction = transactionBuilder
			.addOperation(paymentOperation)
			.setTimeout(180000)
			.build();
		return transaction;
	}

	private async submitTransaction(transaction) {
		const response = await this.client.submitTransaction(transaction);
		const txid = response.id;
		return txid;
	}

	private validatePaymentData(data: Record<string, any>, options: Record<string, any> = {}) {
		if (options.amount && !data.amount) {
			throw new Error('Missing amount');
		}
		if (options.memo && !data.memo) {
			throw new Error('Missing memo');
		}
		if (options.metadata && !data.metadata) {
			throw new Error('Missing metadata');
		}
		if (options.uid && !data.uid) {
			throw new Error('Missing uid');
		}
		if (options.identifier && !data.identifier) {
			throw new Error('Missing identifier');
		}
		if (options.recipient && !data.recipient) {
			throw new Error('Missing recipient');
		}
	}
}
