import cloudinary from 'cloudinary';
import env from '../constants/environments';

cloudinary.v2.config({
	cloud_name: env.CLOUDINARY_NAME,
	api_key: env.CLOUDINARY_API_KEY,
	api_secret: env.CLOUDINARY_API_SECRET,
	secure: true,
});

export const uploadeImageToCloudinary = async (path: string, options = {}) => {
	const result = await cloudinary.v2.uploader.upload(path, options);
	return { publicId: result.public_id, secureURL: result.secure_url };
};
