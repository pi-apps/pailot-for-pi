import { Router } from 'express';
import { createUser } from './handlers/createUser';
import { deleteUser } from './handlers/deleteUser';
import { getAllUsers } from './handlers/getAllUser';
import { getUser } from './handlers/getUser';
import { updateUser } from './handlers/updateUser';
import { signInUser } from './handlers/signInUser';
import { signOutUser } from './handlers/signOutUser';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', createUser);
userRouter.get('/:id', getUser);
userRouter.delete('/:id', deleteUser);
userRouter.patch('/:id', updateUser);
userRouter.post('/sign-in', signInUser);
userRouter.get('/sign-out', signOutUser);

export const UserController = { router: userRouter };
