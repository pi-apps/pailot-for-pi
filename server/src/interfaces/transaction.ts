import { IEarning } from './payment';
import { ICourier, IUser } from './user';

export enum DeliveryStatus {
	CREATED = 'Created',
	PENDING = 'Pending',
	ACCEPTED = 'Accepted',
	REJECTED = 'Rejected',
	PICKED_UP = 'Picked up',
	IN_TRANSIT = 'In Transit',
	DELIVERED = 'Delivered',
}

export interface ITransaction {
	id: string;
	trackingNumber: number;
	senderUserId: IUser;
	courierUserId: ICourier;
	receiverUserId: IUser;
	fromAddress: string;
	toAddress: string;
	itemDescription: string;
	itemWeight: number;
	amount: number;
	deliveryStatus: DeliveryStatus;
	pickupDate: Date;
	deliveryDate: Date;
	deliveryCode: number;
	paymentId: IEarning;
}
