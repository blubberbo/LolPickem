import { Request, Response } from 'express';
import { Account, Game } from '../models';
import * as exampleGameJSON from '../constants/example-game.json';
import { GameService } from '../services/game.service';
export class GameController {
  constructor(protected gameService: GameService = new GameService()) {}
  /**
   * GET local API call to get a random account based on the given Queue, Tier and Division
   * @param queue: string
   * @param tier: string
   * @param division: string
   * @returns randomGame: Game
   */
  getGame = async (req: Request, res: Response): Promise<void> => {
    // check if we are running in offline mode
    if (process.env.OFFLINE_MODE === 'true') {
      // return an example json file, simulating an api call
      // simulate a latency delay, based on the env value
      await new Promise(resolve =>
        setTimeout(
          resolve,
          process.env.SIMULATED_LATENCY_DELAY
            ? parseInt(process.env.SIMULATED_LATENCY_DELAY) * 1000
            : 0,
        ),
      );
      res.json(exampleGameJSON);
    } else {
      // else, we are not in offline_mode, so continue online
      // get the params from the request
      const queue = req.params.queue;
      const tier = req.params.tier;
      const division = req.params.division;

      // create a random account
      let randomAccount: Account = new Account();
      // create a random game
      let randomGame: Game = new Game();
      // get a random account by the queue, tier and division
      await this.gameService
        .getRandomAccountByQueueTierDivision(queue, tier, division)
        .then(returnedAccount => (randomAccount = returnedAccount));
      // get a random game for the account
      await this.gameService
        .getRandomMatchForAccountId(randomAccount.accountId)
        .then(returnedGame => (randomGame = returnedGame));
      res.json(randomGame);
    }
  };
}
