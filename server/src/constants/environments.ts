import dotenv from 'dotenv';

console.log('NODE_ENV: ' + process.env.NODE_ENV);

const result = dotenv.config();

if (result.error) {
	if (process.env.NODE_ENV === 'development') {
		console.error(
			'.env file not found. This is an error condition in development. Additional error is logged below'
		);
		throw result.error;
	}
}

interface Environment {
	PI_API_KEY: string;
	PLATFORM_API_URL: string;
	SESSION_SECRET: string;
}

const env: Environment = {
	PI_API_KEY: process.env.PI_API_KEY || '',
	PLATFORM_API_URL: process.env.PLATFORM_API_URL || '',
	SESSION_SECRET: process.env.SESSION_SECRET || '',
};

export default env;
