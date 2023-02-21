import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { platformAPIClient } from '../../../utils/platformAPIClient';
import { createUserEntry } from '../services/user.services';

export async function signInUser(req: Request, res: Response) {
	const auth = req.body.authResult;
	console.log(auth);
	try {
		const me = await platformAPIClient.get(`/v2/me`, {
			headers: { Authorization: `Bearer ${auth.accessToken}` },
		});
		console.log(me);
	} catch (error) {
		return res.status(401).json({ error: 'Invalid access token' });
	}

	const result = await createUserEntry(auth);

	if (result.type === Result.SUCCESS) {
		req.session.currentUser = {
			userUid: result.data.userUid,
			username: result.data.username,
			accessToken: result.data.accessToken,
			isAuthenticated: true,
		};
		return res.status(200).json({ message: 'User signed in', data: result.data });
	} else {
		return res.status(500).json({ message: result.message, error: result.error });
	}
}
