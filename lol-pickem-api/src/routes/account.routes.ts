import { Router } from 'express';
import { AccountController } from '../controllers/account.controller';

export class AccountRoutes {
  public router: Router;
  public accountController: AccountController = new AccountController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/:name', this.accountController.getAccountBySummonerName);
  }
}
