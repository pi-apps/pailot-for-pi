import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

export interface DeliveryTypeState {
	deliveryType: string;
}

export type RootState = ReturnType<typeof store.getState>

type DeliveryDetailsType = {
	imageName: string;
	imageURL: string;
	productName: string;
	description: string;
	weight: string;
	size: string;
	category: string;
	modeOfDelivery: string[];
	courierDetails: CourierDetails;
	receiverDetails: ReceiverDetails;
	deliveryRegion: string;
	receiverProfilePicture: string;
	receiversUsername: string;
	pickupLocation: string;
	dropLocation: string;
  transactionAmount?: number;
};

type CourierDetails = {
	courierUserName: string;
	courierUserId: string;
	courierProfileImage: string;
	newUser: boolean;
	status: 'pending' | 'pick';
};

type ReceiverDetails = {
	receiverUserName: string;
	receiverUserId: string;
	receiverProfileImage: string;
};

export interface DeliveryDetailsTypeState {
	deliveryDetails: DeliveryDetailsType;
}

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
			productName: '',
			description: '',
			weight: '',
			size: '',
			category: '',
			modeOfDelivery: [''],
			courierDetails: {
				courierUserName: '@piCourierUsername',
				courierProfileImage: '',
				courierUserId: '',
				newUser: true,
				status: 'pending',
			},
			receiverDetails: {
				receiverUserName: '@piReceiverUsername',
				receiverUserId: '64f51653-6e50-40db-80bf-087461a130bf',
				receiverProfileImage: '',
			},
			deliveryRegion: '',
			pickupLocation: '',
			dropLocation: '',
      transactionAmount: 0,
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
    setTransactionAmount: (state, action: PayloadAction<number>) => {
      state.deliveryDetails = { ...state.deliveryDetails, transactionAmount: action.payload };
    }
	},
});

const store = configureStore({
	reducer: {
		deliveryType: deliveryTypeSlice.reducer,
		deliveryDetails: deliveryDetailsSlice.reducer,
	},
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      // ignoredActions: ['your/action/type'],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['payload.image'],
      // Ignore these paths in the state
      ignoredPaths: ['deliveryDetails.image'],
    },
  }),
});

export const deliveryTypeActions = deliveryTypeSlice.actions;
export const deliveryDetailsActions = deliveryDetailsSlice.actions;

export default store;
