import { IEarning } from './payment';
import { ICourier, IUser } from './user';

export interface ITransaction {
	id: string;
	trackingNumber: number | null;
	senderUserId: IUser;
	courierUserId: ICourier | null;
	receiverUserId: IUser;
	preferredModeOfDelivery: string;
	fromAddress: string;
	toAddress: string;
	itemImage: string;
	itemName: string;
	itemDescription: string;
	itemWeight: number;
	itemWorth: number;
	transactionAmount: number;
	deliveryStatus: DeliveryStatus;
	itemCategory: ItemCategory;
	deliveryRange: DeliveryRange;
	fromState: string;
	toState: string | null;
	estimatedDeliveryTime: Date | null;
	pickupDate: Date;
	deliveryDate: Date;
	deletedDate: string | null;
	deliveryCode: number;
	paymentId: IEarning | null;
}

export enum DeliveryStatus {
	CREATED = 'Created',
	PENDING = 'Pending',
	ACCEPTED = 'Accepted',
	REJECTED = 'Rejected',
	PICKED_UP = 'Picked up',
	IN_TRANSIT = 'In Transit',
	DELIVERED = 'Delivered',
}

export enum DeliveryRange {
	LOCAL_DELIVERY = 'Local Delivery',
	INTER_STATE = 'Inter State',
}

export enum ItemCategory {
	FOOD_DELIVERY = 'Food delivery',
	ELECTRONICS = 'Electronics',
	PHONES_AND_COMPUTERS = 'Phone and Computers',
	GROCERIES = 'Groceries',
	FURNITURES = 'Furnitures',
	FASHION = 'Fashion',
	BABY_PRODUCTS = 'Baby products',
	AUTOMOBILE = 'Automobile',
	OTHERS = 'Others',
}
