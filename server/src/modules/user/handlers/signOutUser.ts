import { Request, Response } from 'express';

export async function signOutUser(req: Request, res: Response) {
	req.session.destroy((err) => {
		return res
			.status(500)
			.json({ message: 'An unexpected error occured. please try again', error: err });
	});
	return res.status(200).json({ message: 'User signed out' });
}
