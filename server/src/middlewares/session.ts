import { Response, Request, NextFunction } from 'express';
import 'express-session';
import { Courier } from '../db/entity/Courier';
import { User } from '../db/entity/User';

declare module 'express-session' {
	export interface SessionData {
		currentUser: User | Courier | null;
	}
}

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	if (req.session.currentUser) {
		next();
	} else {
		return res.status(401).json({ message: 'User session ended. Please Login' });
	}
};
