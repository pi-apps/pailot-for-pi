import 'reflect-metadata';
import { DataSource } from 'typeorm';
import env from '../constants/environments';
import { Courier } from './entity/Courier';
import { Transaction } from './entity/Transaction';
import { Earning } from './entity/Earning';
import { Payout } from './entity/Payout';
import { Session } from './entity/Session';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: env.DATABASE_HOST,
	port: env.DATABASE_PORT,
	username: env.DATABASE_USERNAME,
	password: env.DATABASE_PASSWORD,
	database: env.DATABASE_NAME,
	synchronize: false,
	logging: false,
	entities: [User, Session, Courier, Transaction, Payout, Earning],
	migrations: [],
	subscribers: [],
});
