export interface IUser {
	userUid: string;
	username: string;
	firstName?: string;
	lastName?: string;
	walletAddress?: string;
	profileImg?: string;
	phoneNumber?: number;
	address?: string;
	accessToken: string;
}

export interface ICourier {
	courierUserId: string;
	modeOfTransportation: string;
	activeAddress1: string;
	activeAddress2: string;
	deliveryAmount: number;
}

export interface UpdateCourierDTO {
	modeOfTransportation?: string;
	activeAddress1?: string;
	activeAddress2?: string;
	deliveryAmount?: number;
	numberOfLikes?: number;
	rating?: number;
	earnings?: number;
}
export interface UpdateUserDTO {
	firstName?: string;
	lastName?: string;
	walletAddress?: string;
	profileImg?: string;
	phoneNumber?: number;
	address?: string;
	accessToken?: string;
}

export type CreateUserDTO = {
	user: {
		uid: string;
		username: string;
	};
	accessToken: string;
};

export enum UserRole {
	USER = 1,
	COURIER = 2,
}
