import fs from 'fs';
import path from 'path';
import express from 'express';
import logger from 'morgan';
import { corsMiddleware } from './middlewares/cors';
import { apiRouter } from './modules/router';
import env from "./constants/environments";




//Cloudinary Config
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: env.CLOUDINARY_NAME,
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,
    secure: true,
});
    


const PORT = process.env.PORT || 3333;

import { AppDataSource } from "./data-source"
import { User } from './entity/User';


//establish connection
AppDataSource
   .initialize()
   .then(async () => {
       console.log("Data Source has been initialized")
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

app.post("/upload-image", async (req,res) => {
  const image = req.body;

  if (!image) {
    return res.status(400).json({InputError: "Inputs required!"});
    }

  try {
    const response = await cloudinary.uploader.upload(image);

        if (response) {
            console.log(response)
            console.log("Image URL: " + response.url)
            console.log("Image Public ID: " + response.public_id)

            // Saved the URL and Public_id to DB


        }
  } catch (error) {
    return res.json({error: error.message});
}

})


app.use('/', apiRouter);

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});

