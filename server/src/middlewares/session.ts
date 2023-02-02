import { Response, Request, NextFunction } from 'express';
import 'express-session';

interface SessionProperty {
	userUid: string;
	username: string;
	accessToken: string;
	isAuthenticated: boolean;
}

declare module 'express-session' {
	export interface SessionData {
		currentUser: SessionProperty | null;
	}
}

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	if (req.session.currentUser?.isAuthenticated) {
		next();
	} else {
		return res.status(401).json({ message: 'User session ended. Please Login' });
	}
};
