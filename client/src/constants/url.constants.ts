const API_URL_BASE = 'http://localhost:3333';

export const SIGN_IN_URL = `${API_URL_BASE}/user/sign-in`;
export const LOG_OUT_URL = `${API_URL_BASE}/user/sign-out`;

export const CREATE_USER_URL = `${API_URL_BASE}/user`;
export const GET_ALL_USER_URL = `${API_URL_BASE}/user`;
export const GET_USER_URL = (userId: string) => `${API_URL_BASE}/user/${userId}`;
export const UPDATE_USER_URL = (userId: string) => `${API_URL_BASE}/user/${userId}`;
export const DELETE_USER_URL = (userId: string) => `${API_URL_BASE}/user/${userId}`;

export const CREATE_COURIER_URL = `${API_URL_BASE}/user/courier`;
export const UPDATE_COURIER_URL =(userId: string) => `${API_URL_BASE}/user/courier/${userId}`;
export const DELETE_COURIER_URL =(userId: string) => `${API_URL_BASE}/user/courier/${userId}`;

//Payments Endpoints
export const INCOMPLETE_PAYMENT_URL = `${API_URL_BASE}/payment/incomplete`;
export const APPROVE_PAYMENT_URL = `${API_URL_BASE}/payment/approve`;
export const COMPLETE_PAYMENT_URL = `${API_URL_BASE}/payment/complete`;
export const CANCELLED_PAYMENT_URL = `${API_URL_BASE}/payment/cancel`;
export const WITHDRAW_URL = `${API_URL_BASE}/payment/courier/withdraw`;
