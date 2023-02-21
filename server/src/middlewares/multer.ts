import { Request, Response } from 'express';
import multer from 'multer';

const acceptedMimeType = 'image/jpeg' || 'image/png' || 'image/jpg';
export const upload = multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, callback) => {
		if (file.mimetype !== acceptedMimeType) {
			callback(new Error('File type not supported'));
		}
		callback(null, true);
	},
});

const profileImageUpload = upload.single('image');

export const multerUploadImage = (req: Request, res: Response) => {
	profileImageUpload(req, res, (err) => {
		if (err) return res.status(400).json({ error: 'invalid_file' });
	});
};
