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
	WALLET_PRIVATE_SEED: string;
	SESSION_SECRET: string;
	DATABASE_HOST: string;
	DATABASE_TYPE: string;
	DATABASE_USERNAME: string;
	DATABASE_PASSWORD: string;
	DATABASE_PORT: number;
	DATABASE_NAME: string;
	CLOUDINARY_NAME: string;
	CLOUDINARY_API_KEY: string;
	CLOUDINARY_API_SECRET: string;
	TWILIO_ACCOUNT_SID: string;
	TWILIO_AUTH_TOKEN: string;
}

const env: Environment = {
	PI_API_KEY: process.env.PI_API_KEY || '',
	PLATFORM_API_URL: process.env.PLATFORM_API_URL || '',
	WALLET_PRIVATE_SEED: process.env.WALLET_PRIVATE_SEED || '',
	SESSION_SECRET: process.env.SESSION_SECRET || 'pailot development secret',
	DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
	DATABASE_TYPE: process.env.DATABASE_TYPE || 'postgres',
	DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'pailot_development',
	DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'password',
	DATABASE_PORT: parseInt(process.env.DATABASE_PORT) || 5432,
	DATABASE_NAME: process.env.DATABASE_NAME || 'pailot_development',
	CLOUDINARY_NAME: process.env.CLOUDINARY_NAME || '',
	CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || '',
	CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || '',
	TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || 'ACccc33dbbbdae180aea84d41199addd55',
	TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || '4c24c75996670974726959dedc126179',
};

export default env;
