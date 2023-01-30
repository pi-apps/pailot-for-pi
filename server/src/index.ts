import fs from 'fs';
import path from 'path';
import express from 'express';
import logger from 'morgan';
import { corsMiddleware } from './middlewares/cors';
import { apiRouter } from './modules/router';

const PORT = process.env.PORT || 3333;

import { AppDataSource } from './data-source';
import { User } from './entity/User';

//establish connection
AppDataSource.initialize()
	.then(async () => {
		console.log('Data Source has been initialized');
	})
	.catch((error) => console.error('Error during Data Source initialization:', error));

const app = express();

app.use(express.json());

// Log requests to the console in a compact format:
app.use(logger('dev'));

// Full log of all requests to /log/access.log:
app.use(
	logger('common', {
		stream: fs.createWriteStream(path.join(__dirname, '..', 'log', 'access.log'), { flags: 'a' }),
	})
);

app.options('*', corsMiddleware);
app.use(corsMiddleware);

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Hello World',
	});
});

app.use('/', apiRouter);

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
