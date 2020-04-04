import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export class UserRoutes {
  public router: Router;
  public userController: UserController = new UserController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post('/', this.userController.addUser);
    this.router.patch('/', this.userController.updateUserByIdPushUserHistory);
    this.router.get('/histories', this.userController.getUserHistories);
  }
}
