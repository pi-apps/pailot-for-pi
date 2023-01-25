export interface Transaction {
	deliveryAgent: string;
	receiver: string;
	trackingNumber: number;
	fromAddress: string;
	toAddress: string;
	productDescription: string;
	weight: string;
	additionalInfo: string;
	deliveryAmount: string;
	deliveryStatus: DeliveryStatus;
}

enum DeliveryStatus {
	CREATED = 'Created',
	PENDING = 'Pending',
	ACCEPTED = 'Accepted',
	REJECTED = 'Rejected',
	PICKED_UP = 'Picked up',
	IN_TRANSIT = 'In Transit',
	DELIVERED = 'Delivered',
}
