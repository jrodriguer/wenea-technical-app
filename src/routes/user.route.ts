import express from 'express';

import { UserController } from '../controllers/user.controller';

const router = express.Router();

router.get('/users', UserController.getUsers);
router.get('/user/:id', UserController.getUser);
router.post('/user', UserController.createUser);
router.put('/user/:id', UserController.updateUser);

export default router;
