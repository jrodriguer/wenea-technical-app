import { Request, Response } from 'express';
import { UserService } from './user.service';

export class UserController {
  constructor(private userService: UserService) {}

  public async getUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.getUsers();
      return res.status(200).json({
        success: true,
        data: users
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  public async getUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = await this.userService.getUser(userId);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }
      return res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  public async createUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const createdUser = await this.userService.createUser(userData);
      return res.status(201).json({
        success: true,
        data: createdUser
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  public async updateUser(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await this.userService.updateUser(userId, userData);
      if (!updatedUser) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }
      return res.status(200).json({
        success: true,
        data: updatedUser
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}
