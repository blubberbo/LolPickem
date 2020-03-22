import { Router } from 'express';
import { GameController } from '../controllers/game.controller';

export class GameRoutes {
  public router: Router;
  public gameController: GameController = new GameController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/:queue/:tier/:division', this.gameController.getGame);
  }
}
