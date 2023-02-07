import { Request, Response } from 'express';
import { Result } from '../../../constants/result';
import { sendVerificationCode, validateVerificationCode } from '../services/user.services';

export async function verifyPhoneNumber(req: Request, res: Response) {
	const phoneNumber = req.body.phoneNumber;
	const response = await sendVerificationCode(phoneNumber);

	if (response.type === Result.ERROR) {
		return res.status(500).json(response);
	}
	return res.status(200).json(response);
}

export async function validateOTPCode(req: Request, res: Response) {
	const userUid = req.params.id;
	const code = req.body.verificationCode;
	const phoneNumber = req.body.phoneNumber;

	const response = await validateVerificationCode(userUid, code, phoneNumber);

	if (response.type == Result.ERROR) {
		return res.status(500).json(response);
	}
	return res.status(200).json(response);
}
