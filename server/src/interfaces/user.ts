export interface IUser {
	userUid: string;
	username: string;
	walletAddress: string | null;
	profileImg: string | null;
	accessToken: string;
	imagePublicId: string | null;
}

export interface ICourier {
	courierUserId: string;
	numberOfLikes: number;
	rating: number;
	modeOfTransportation: string;
	regionOfOperation: string;
	preferredDeliveryAmount: number;
	country: string;
	earnings: number;
}

export interface UpdateCourierDTO {
	modeOfTransportation?: string;
	regionOfOperation?: string;
	preferredDeliveryAmount?: number;
	numberOfLikes?: number;
	rating?: number;
	country?: string;
	earnings?: number;
}

export interface UpdateUserDTO {
	walletAddress?: string;
	profileImg?: string;
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
