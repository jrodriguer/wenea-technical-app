import { Request, Response } from 'express';

import { UserService } from '../services/user.service';
import { UserCreateRequest, UserUpdateRequest } from '../models/user.model';

export class UserController {
  static async getUsers(req: Request, res: Response) {
    const userService = new UserService();
    const users = await userService.getUsers();
    res.send(users);
  }

  static async getUser(req: Request, res: Response) {
    const userService = new UserService();
    const user = await userService.getUser(req.params.id);
    res.send(user);
  }

  static async createUser(req: Request, res: Response) {
    const userService = new UserService();
    const user = await userService.createUser(req.body as UserCreateRequest);
    res.send(user);
  }

  static async updateUser(req: Request, res: Response) {
    const userService = new UserService();
    const user = await userService.updateUser(req.params.id, req.body as UserUpdateRequest);
    res.send(user);
  }
}
