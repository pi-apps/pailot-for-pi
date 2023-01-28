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

	// In production, environment variables are injected into the container environment. We should not even have
	// a .env file inside the running container.
}

interface Environment {
	pi_api_key: string;
	platform_api_url: string;
	DATABASE_HOST: string;
	DATABASE_TYPE: string;
	DATABASE_USERNAME: string;
	DATABASE_PASSWORD: string;
	DATABASE_PORT;


}

const env: Environment = {
	pi_api_key: process.env.PI_API_KEY || '',
	platform_api_url: process.env.PLATFORM_API_URL || '',
	DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
	DATABASE_TYPE: process.env.DATABASE_TYPE || 'postgres',
	DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
	DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '123456',
	DATABASE_PORT: process.env.DATABASE_PORT || 5432



};

export default env;
