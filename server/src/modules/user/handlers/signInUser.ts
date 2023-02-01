import { Request, Response } from 'express';
import { AppDataSource } from '../../../db/dataSource';
import { User } from '../../../db/entity/User';
import { platformAPIClient } from '../../../utils/platformAPIClient';

const UserModel = AppDataSource.getRepository(User);

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

	const currentUser = await UserModel.findOne({ where: { userUid: auth.user.uid } });

	if (currentUser) {
		currentUser.accessToken = auth.accessToken;
		await UserModel.save(currentUser);
	} else {
		const createdUser = UserModel.create({
			userUid: auth.user.uid,
			username: auth.user.username,
			accessToken: auth.accessToken,
		});
		await UserModel.save(createdUser);
	}

	req.session.currentUser = currentUser;

	return res.status(200).json({ message: 'User signed in' });
}
