import fs from 'fs';
import path from 'path';
import express from 'express';
import logger from 'morgan';
import session from 'express-session';
import { TypeormStore } from 'connect-typeorm';
import { corsMiddleware } from './middlewares/cors';
import { apiRouter } from './modules/router';
import { AppDataSource } from './db/data-source';
import env from './constants/environments';
import './middlewares/session';
import { Session } from './db/entity/Session';

const PORT = process.env.PORT || 3333;
const app = express();

const sessionRepository = AppDataSource.getRepository(Session);

app.use(express.json());

// Log requests to the console in a compact format:
if (process.env.NODE_ENV === 'development') app.use(logger('dev'));

// Full log of all requests to /log/access.log:
app.use(
	logger('common', {
		stream: fs.createWriteStream(path.join(__dirname, '..', 'log', 'access.log'), { flags: 'a' }),
	})
);

app.options('*', corsMiddleware);
app.use(corsMiddleware);
app.use(
	session({
		secret: env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		store: new TypeormStore({
			cleanupLimit: 2,
			limitSubquery: false, // If using MariaDB.
			ttl: 86400,
		}).connect(sessionRepository),
	})
);

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Hello World',
	});
});

app.use('/', apiRouter);

AppDataSource.initialize()
	.then(() => {
		console.log('DataSource is initialized');
		app.listen(PORT, () => {
			console.log(`Example app listening on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.error('Error during DataSource initialization:', err);
	});
