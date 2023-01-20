import { Router } from 'express';
import { getAllUsers } from './handlers/getAllUser';

const userRouter = Router();

userRouter.get('/', getAllUsers);
//userRouter.post('/', createUser);

export const UserController = { router: userRouter };