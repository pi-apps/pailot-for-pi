import axios from 'axios';
import env from '../constants/environments';

export const platformAPIClient = axios.create({
	baseURL: env.PLATFORM_API_URL,
	timeout: 20000,
	headers: { Authorization: `Key ${env.PI_API_KEY}` },
});
