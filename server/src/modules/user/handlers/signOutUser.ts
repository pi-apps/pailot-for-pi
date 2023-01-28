import { Request, Response } from 'express';

export async function signOutUser(req: Request, res: Response) {
	req.session.currentUser = null;
	return res.status(200).json({ message: 'User signed out' });
}
