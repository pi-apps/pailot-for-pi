import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

interface UserDetailsState {
	isCourier: boolean;
	isDelivery: boolean;
}

interface DeliveryTypeState {
	deliveryType: string;
}

interface DeliveryDetailsTypeState {
	deliveryDetails: object;
}

interface UserCourierDetailstypeState {
	userCourierDetails: object;
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
	} as UserCourierDetailstypeState,
	reducers: {
		setUserCourierDetails: (state, action: PayloadAction<object>) => {
			state.userCourierDetails = action.payload;
		},
	},
});

const userDetailsSlice = createSlice({
	name: 'userDetails',
	initialState: {
		isCourier: false,
		isDelivery: false,
	} as UserDetailsState,
	reducers: {
		setIsCourier: (state) => {
			state.isCourier = !state.isCourier;
		},
		setIsDelivery: (state) => {
			state.isDelivery = !state.isDelivery;
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
