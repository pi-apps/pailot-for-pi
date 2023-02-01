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
	DATABASE_HOST: string;
	DATABASE_TYPE: string;
	DATABASE_USERNAME: string;
	DATABASE_PASSWORD: string;
	DATABASE_PORT;
	CLOUDINARY_NAME:string;
    CLOUDINARY_API_KEY:string;
	CLOUDINARY_API_SECRET:string;


}

const env: Environment = {
	PI_API_KEY: process.env.PI_API_KEY || '',
	PLATFORM_API_URL: process.env.PLATFORM_API_URL || '',
	SESSION_SECRET: process.env.SESSION_SECRET || 'pailot development secret',
	DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
	DATABASE_TYPE: process.env.DATABASE_TYPE || 'postgres',
	DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
	DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '123456',
	DATABASE_PORT: process.env.DATABASE_PORT || 5432,
	CLOUDINARY_NAME: process.env.CLOUDINARY_NAME || '',
	CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || '',
	CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || ''



};

export default env;
