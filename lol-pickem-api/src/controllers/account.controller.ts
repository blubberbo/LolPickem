import { Request, Response } from 'express';
import { Account } from '../models';
import { processError } from '../util/tools';
import { AccountService } from '../services/account.service';
export class AccountController {
  constructor(
    protected accountService: AccountService = new AccountService(),
  ) {}
  /**
   * GET local API call to get an account based on the given Summoner Name
   * @param name: string
   * @returns account: Account
   */
  getAccountBySummonerName = async (
    req: Request,
    res: Response,
  ): Promise<void> => {
    try {
      // get the params from the request
      const name = req.params.name;

      // create an account
      let foundAccount: Account;

      // try to get an account, matching the name
      await this.accountService
        .getAccountBySummonerName(name)
        .then((returnedAccount) => (foundAccount = returnedAccount))
        .catch((error) => {
          throw error;
        });
      res.json(foundAccount);
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
