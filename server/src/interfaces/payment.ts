import { ITransaction } from './transaction';
import { ICourier } from './user';

export interface Payment {
	transactionId: string;
	amount: string;
	u2aPaymentid: string;
	a2uPaymentid: string;
	u2aTransactionid: string;
	a2uTransactionid: string;
}

export interface PaymentDTO {
	identifier: string;
	user_uid: string;
	amount: number;
	memo: string;
	metadata: object;
	from_address: string;
	to_address: string;
	direction: 'user_to_app' | 'app_to_user';
	created_at: string;
	network: string;
	status: {
		developer_approved: boolean;
		transaction_verified: boolean;
		developer_completed: boolean;
		cancelled: boolean;
		user_cancelled: boolean;
	};
	transaction: null | {
		txid: string;
		verified: boolean;
		_link: string;
	};
}

export enum PaymentStatus {
	CREATED = 'created',
	SUBMITTED = 'submitted',
	CANCELLED = 'cancelled',
	COMPLETED = 'completed',
}

export interface IPayout {
	id: string;
	courierUserId: ICourier;
	PaymentId: string;
	amount: number;
	paymentStatus: PaymentStatus;
	transactionId: string;
}

export interface IEarning {
	id: string;
	delivery: ITransaction;
	paymentId: string;
	amount: number;
	paymentStatus: PaymentStatus;
	transactionId: string;
}
