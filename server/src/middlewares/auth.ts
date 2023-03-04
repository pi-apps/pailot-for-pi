import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import env from '../constants/environments';

export const SECRET_KEY: Secret = env.SESSION_SECRET;

interface JWTToken extends JwtPayload {
	userUid: string;
	username: string;
}

export interface CustomRequest extends Request {
	token: JWTToken;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.header('Authorization')?.replace('Bearer ', '');

		if (!token) {
			throw new Error();
		}

		const decoded = jwt.verify(token, SECRET_KEY) as JWTToken;
		(req as CustomRequest).token = decoded;

		next();
	} catch (err) {
		res.status(401).send('Please authenticate');
	}
};
