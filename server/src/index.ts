import fs from 'fs';
import path from 'path';
import express from 'express';
import logger from 'morgan';
import { corsMiddleware } from './middlewares/cors';
import { apiRouter } from './modules/router';

const PORT = process.env.PORT || 3333;

import { AppDataSource } from "./data-source"
import { User } from './entity/User';


//establish connection
AppDataSource
   .initialize()
   .then(async () => {
       console.log("Data Source has been initialized!")
   })
   .catch(error => console.error("Error during Data Source initialization:", error))

const app = express();
app.use(express.json());

// Log requests to the console in a compact format:
app.use(logger('dev'));

app.options('*', corsMiddleware);
app.use(corsMiddleware);

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Hello World',
	});
});

app.get("/test", async (req, res) => {
	console.log("Inserting a new user into the database...")
    const user = new User()
	user.username ="Saneeitas"
	user.user_uid = "331fc5rctct"
	user.first_name ="Muhammad"
	user.last_name ="Ibrahim"
	user.wallet_address ="gasca51155544144xx16661"
	user.user_role =2
	user.profile_img ="saneeitas.png"
	user.phone_number = 2347033415593;
	user.address ="Hotoro"
	user.access_token ="23455av"
   
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)
})



app.use('/', apiRouter);

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});

