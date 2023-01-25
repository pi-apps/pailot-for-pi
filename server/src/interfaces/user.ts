export interface User {
	userUid: string;
	username: string;
	address?: string;
	walletAddress?: string;
	profileImage?: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface Dispatcher extends User {
	numberOflikes: number;
	rating: number;
	modeOfTransport: string;
	regionOfOperation: string;
	deliveryAmount: number;
}
