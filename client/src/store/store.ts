import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

interface UserDetailsState {
	isCourier: boolean;
	hasMadeFirstDelivery: boolean;
	username: string;
	walletAddress: string;
	profileImg: string;
	accessToken: string;
	imagePublicId: string;
	userId: string;
}

interface DeliveryTypeState {
	deliveryType: string;
}

interface DeliveryDetailsTypeState {
	deliveryDetails: object;
}

interface UserCourierDetailsTypeState {
	userCourierDetails: object;
	isActive: boolean;
	numberOfLikes: number;
	rating: number;
	earnings: number;
	userId: string;
}

const userCourierDetailsSlice = createSlice({
	name: 'userCourierDetails',
	initialState: {
		userCourierDetails: {
			modeOfTransportation: '',
			regionOfOperation: '',
			startTime: '',
			endTime: '',
			amount: 0,
		},
		isActive: false,
		numberOfLikes: 0,
		rating: 0,
		earnings: 0,
		userId: '',
	} as UserCourierDetailsTypeState,
	reducers: {
		setUserCourierDetails: (state, action: PayloadAction<object>) => {
			state.userCourierDetails = action.payload;
		},
		setIsActive: (state, action: PayloadAction<boolean>) => {
			state.isActive = action.payload;
		},
		setNumberOfLikes: (state, action: PayloadAction<number>) => {
			state.numberOfLikes = action.payload;
		},
		setRating: (state, action: PayloadAction<number>) => {
			state.rating = action.payload;
		},
		setEarnings: (state, action: PayloadAction<number>) => {
			state.earnings = action.payload;
		},
		setUserId: (state, action: PayloadAction<string>) => {
			state.userId = action.payload;
		},
	},
});

const userDetailsSlice = createSlice({
	name: 'userDetails',
	initialState: {
		isCourier: false,
		hasMadeFirstDelivery: false,
		username: '',
		walletAddress: '',
		profileImg: '',
		accessToken: '',
		imagePublicId: '',
		userId: '',
	} as UserDetailsState,
	reducers: {
		setIsCourier: (state) => {
			state.isCourier = !state.isCourier;
		},
		setHasMadeFirstDelivery: (state) => {
			state.hasMadeFirstDelivery = !state.hasMadeFirstDelivery;
		},
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setWalletAddress: (state, action: PayloadAction<string>) => {
			state.walletAddress = action.payload;
		},
		setProfileImg: (state, action: PayloadAction<string>) => {
			state.profileImg = action.payload;
		},
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.accessToken = action.payload;
		},
		setImagePublicId: (state, action: PayloadAction<string>) => {
			state.imagePublicId = action.payload;
		},
		setUserId: (state, action: PayloadAction<string>) => {
			state.userId = action.payload;
		},
	},
});

const deliveryTypeSlice = createSlice({
	name: 'deliveryType',
	initialState: {
		deliveryType: 'active',
	} as DeliveryTypeState,
	reducers: {
		setDeliveryType: (state, action: PayloadAction<string>) => {
			state.deliveryType = action.payload;
		},
	},
});

const deliveryDetailsSlice = createSlice({
	name: 'deliveryDetails',
	initialState: {
		deliveryDetails: {
			imageName: 'file name',
			imageURL: '',
			productName: 'Product name sample',
			description: 'Description details.....',
			weight: 'Weight info',
			size: 'Size info',
			category: 'Phone and Tablet',
			modeOfDelivery: ['No data'],
			courierDetails: 'No courier',
			deliveryRegion: 'Region',
			receiverProfilePicture: '',
			receiversUsername: '@piusername',
			pickupLocation: 'Location Merchant',
			dropLocation: 'Location Receiver',
		},
	} as DeliveryDetailsTypeState,
	reducers: {
		setImageName: (state, action: PayloadAction<string>) => {
			state.deliveryDetails = { ...state.deliveryDetails, imageName: action.payload };
		},
		setImageURL: (state, action: PayloadAction<string>) => {
			state.deliveryDetails = { ...state.deliveryDetails, imageURL: action.payload };
		},
		setProductName: (state, action: PayloadAction<string>) => {
			state.deliveryDetails = { ...state.deliveryDetails, productName: action.payload };
		},
		setDescription: (state, action: PayloadAction<string>) => {
			state.deliveryDetails = { ...state.deliveryDetails, description: action.payload };
		},
		setWeight: (state, action: PayloadAction<string>) => {
			state.deliveryDetails = { ...state.deliveryDetails, weight: action.payload };
		},
		setSize: (state, action: PayloadAction<string>) => {
			state.deliveryDetails = { ...state.deliveryDetails, size: action.payload };
		},
		setCategory: (state, action: PayloadAction<string>) => {
			state.deliveryDetails = { ...state.deliveryDetails, category: action.payload };
		},
		setModeOfDelivery: (state, action: PayloadAction<string[]>) => {
			state.deliveryDetails = { ...state.deliveryDetails, modeOfDelivery: action.payload };
		},
		setCourierDetails: (state, action: PayloadAction<any>) => {
			state.deliveryDetails = { ...state.deliveryDetails, courierDetails: action.payload };
		},
		setDeliveryRegion: (state, action: PayloadAction<string>) => {
			state.deliveryDetails = { ...state.deliveryDetails, deliveryRegion: action.payload };
		},
		setReceiversUsername: (state, action: PayloadAction<string>) => {
			state.deliveryDetails = { ...state.deliveryDetails, receiversUsername: action.payload };
		},
		setPickupLocation: (state, action: PayloadAction<string>) => {
			state.deliveryDetails = { ...state.deliveryDetails, pickupLocation: action.payload };
		},
		setDropLocation: (state, action: PayloadAction<string>) => {
			state.deliveryDetails = { ...state.deliveryDetails, dropLocation: action.payload };
		},
	},
});

const store = configureStore({
	reducer: {
		userDetails: userDetailsSlice.reducer,
		userCourierDetails: userCourierDetailsSlice.reducer,
		deliveryType: deliveryTypeSlice.reducer,
		deliveryDetails: deliveryDetailsSlice.reducer,
	},
});

export const userDetailsActions = userDetailsSlice.actions;
export const userCourierDetailsActions = userCourierDetailsSlice.actions;
export const deliveryTypeActions = deliveryTypeSlice.actions;
export const deliveryDetailsActions = deliveryDetailsSlice.actions;

export default store;
