import { Request, Response } from 'express';
import { platformAPIClient } from '../../../utils/platformAPIClient';

const User = new Map();

export async function signInUser(req: Request, res: Response) {
	const auth = req.body.authResult;
	try {
		const me = await platformAPIClient.get(`/v2/me`, {
			headers: { Authorization: `Bearer ${auth.accessToken}` },
		});
		console.log(me);
	} catch (error) {
		return res.status(401).json({ error: 'Invalid access token' });
	}

	let currentUser = await User.get(auth.user_uid);

	if (currentUser) {
		const updatedUser = { ...currentUser, accessToken: auth.accessToken };
		User.delete(auth.user_uid);
		User.set(updatedUser.user_uid, updatedUser);
	} else {
		User.set(auth.user_uid, auth);

		currentUser = User.get(auth.user_uid);
	}

	req.session.currentUser = currentUser;

	return res.status(200).json({ message: 'User signed in' });
}
