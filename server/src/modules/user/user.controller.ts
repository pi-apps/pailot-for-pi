import { Router } from 'express';
import { createUser } from './handlers/createUser';
import { deleteUser } from './handlers/deleteUser';
import { getAllUsers } from './handlers/getAllUser';
import { getUser } from './handlers/getUser';
import { updateUser } from './handlers/updateUser';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', createUser);
userRouter.get('/:id', getUser);
userRouter.delete('/:id', deleteUser);
userRouter.patch('/:id', updateUser);

export const UserController = { router: userRouter };
