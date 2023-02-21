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
