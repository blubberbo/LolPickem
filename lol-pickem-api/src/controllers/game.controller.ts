import { Request, Response } from 'express';
import { Account, Game } from '../models';
import * as exampleGameJSON from '../constants/example-game.json';
import { GameService } from '../services/game.service';
import { processError } from '../util/tools';
import { AccountService } from '../services/account.service';
export class GameController {
  constructor(
    protected gameService: GameService = new GameService(),
    protected accountService: AccountService = new AccountService(),
  ) {}
  /**
   * GET local API call to get a random account based on the given Queue, Tier and Division
   * @param queue: string
   * @param tier: string
   * @param division: string
   * @param accountId: string
   * @returns randomGame: Game
   */
  getGame = async (req: Request, res: Response): Promise<void> => {
    try {
      // check if we are running in offline mode
      if (process.env.OFFLINE_MODE === 'true') {
        // return an example json file, simulating an api call
        // simulate a latency delay, based on the env value
        await new Promise((resolve) =>
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
        const accountId = req.params.accountId;
        // create an account either to be inherited from the param or to be randomly selected from the API
        let selectedAccount: Account = new Account();
        // if we are using the accountId
        if (accountId) {
          // pass the accountId to the selectedAccount
          selectedAccount.accountId = accountId;
        } else {
          // else, there was no accountId passed in, so get a random account by the queue, tier and division
          await this.accountService
            .getRandomAccountByQueueTierDivision(queue, tier, division)
            .then((returnedAccount) => (selectedAccount = returnedAccount))
            .catch((error) => {
              throw error;
            });
        }
        // create a random game
        let randomGame: Game = new Game();
        // get a random game for the account
        await this.gameService
          .getRandomMatchForAccountId(selectedAccount.accountId)
          .then((returnedGame) => (randomGame = returnedGame))
          .catch((error) => {
            throw error;
          });
        res.json(randomGame);
      }
    } catch (error) {
      // create a custom error from the error
      const processedError = processError(error);
      res
        .status(processedError.status)
        .send({ message: processedError.message });
      throw error;
    }
  };
}
