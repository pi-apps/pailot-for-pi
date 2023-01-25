/**
 * Handle all business logic for the user module, like fetching information from the db,
 * Authenticating or making payment with the PlatformAPIClient (found in the utils folder)
 */

import { Result } from '../../../constants/result';
import { ErrorResult, NotFoundResult, SuccessResult } from '../../../interfaces/result';
import { User } from '../../../interfaces/user';

export type CreateOrUpdateUserResult = SuccessResult<User> | ErrorResult;
export type DeleteUserResult = SuccessResult<null> | ErrorResult;
export type UsersResult = SuccessResult<User[]> | ErrorResult;
export type UserResult = SuccessResult<User> | NotFoundResult | ErrorResult;
type IUser = Pick<User, 'userUid' | 'username'>;

const database = new Map<string, User>();

export async function createUserEntry(user: IUser): Promise<CreateOrUpdateUserResult> {
	try {
		await database.set(user.userUid, user);
		return {
			type: Result.SUCCESS,
			data: user,
		};
	} catch (error) {
		return {
			type: Result.ERROR,
			message: `An unexpected error occurred while creating user`,
			error,
		};
	}
}

export async function updateUserEntry(
	userUid: string,
	userData: Record<string, any>
): Promise<CreateOrUpdateUserResult> {
	try {
		const user = await database.get(userUid);
		const updatedUser = { ...user, ...userData };
		await database.set(userUid, updatedUser);
		return {
			type: Result.SUCCESS,
			data: updatedUser,
		};
	} catch (error) {
		return {
			type: Result.ERROR,
			message: `An unexpected error occurred during updating user with id ${userUid}`,
			error,
		};
	}
}

export async function findUser(userUid: string): Promise<UserResult> {
	try {
		const result = await database.get(userUid);
		if (!result) {
			return {
				type: Result.NOT_FOUND,
				message: `Could not find user with id: ${userUid}`,
			};
		}
		return {
			type: Result.SUCCESS,
			data: result,
		};
	} catch (error) {
		return {
			type: Result.ERROR,
			message: `An unexpected error occurred during updating user with id ${userUid}`,
			error,
		};
	}
}

export async function deleteUserEntry(userUid: string): Promise<DeleteUserResult> {
	try {
		database.delete(userUid);
		return {
			type: Result.SUCCESS,
			data: null,
		};
	} catch (error) {
		return {
			type: Result.ERROR,
			message: `An unexpected error occurred while deleting user with id ${userUid}`,
			error: error,
		};
	}
}

export async function getUsersEntry(): Promise<UsersResult> {
	try {
		const results = Object.values(database) as User[];
		return {
			type: Result.SUCCESS,
			data: results,
		};
	} catch (error) {
		return {
			type: Result.ERROR,
			message: error.message,
			error,
		};
	}
}
