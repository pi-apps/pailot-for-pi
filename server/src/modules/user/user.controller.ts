import { Router } from 'express';
import { getAllUsers } from './handlers/getAllUser';
import { signInUser } from './handlers/signInUser';
import { signOutUser } from './handlers/signOutUser';

const userRouter = Router();

userRouter.get('/', getAllUsers);
//userRouter.post('/', createUser);
userRouter.post('/sign-in', signInUser);
userRouter.get('/sign-out', signOutUser);

export const UserController = { router: userRouter };
