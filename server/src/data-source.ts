import 'reflect-metadata';
import { DataSource } from 'typeorm';
import env from './constants/environments';
import { Courier_Data } from './entity/Courier_Data';
import { Deliveries } from './entity/Deliveries';
import { Payment } from './entity/Payment';
import { Transaction_Request } from './entity/Transaction_Requests';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: env.DATABASE_HOST,
	port: env.DATABASE_PORT,
	username: env.DATABASE_USERNAME,
	password: env.DATABASE_PASSWORD,
	database: 'Pailot',
	synchronize: true,
	logging: false,
	entities: [User, Deliveries, Courier_Data, Payment, Transaction_Request],
	migrations: [],
	subscribers: [],
});
