import { Account } from '../models';
import { LolApiService } from './lol-api.service';

export class AccountService {
  private lolApiService: LolApiService = new LolApiService();

  /**
   * local method to get a random account based on the given Queue, Tier and Division
   * @param queue: string
   * @param tier: string
   * @param division: string
   * @returns randomAccount: Account
   */
  async getRandomAccountByQueueTierDivision(
    queue: string,
    tier: string,
    division: string,
  ): Promise<Account> {
    try {
      // create a list of accounts
      let accountsList: Array<Account> = [];
      // get a random summoner from the tier that was passed in
      await this.getAccountsByTier(queue, tier, division)
        .then((returnedAccounts) => (accountsList = returnedAccounts))
        .catch((error) => {
          throw error;
        });
      // get a random account from the returned list
      // create the new summoner account as a new account, to strip off the fields we don't want in the constructor method
      const randomAccount: Account =
        accountsList[Math.floor(Math.random() * accountsList.length)];
      // the summoner account we have will be missing the accountId, do we need to retrieve it
      await this.lolApiService
        .getSummonerBySummonerId(randomAccount.summonerId)
        .then(
          (returnedSummoner) =>
            (randomAccount.accountId = returnedSummoner.accountId),
        )
        .catch((error) => {
          throw error;
        });
      // find a random game that account participated in
      return randomAccount;
    } catch (error) {
      throw error;
    }
  }

  /**
   * use the LoL API to get a random account based on the given Queue, Tier and Division
   * @param queue: string
   * @param tier: string
   * @param division: string
   * @returns accountsByTier: Array<Account>
   */
  async getAccountsByTier(
    queue: string,
    tier: string,
    division: string,
  ): Promise<Array<Account>> {
    try {
      let summonersByTier: Array<Account> = [];
      // while no summoners are returned
      while (summonersByTier.length === 0) {
        // we can assume there are at least 50 pages of summoners
        // create a random number from 1-50 to get a random page
        const randomPage = Math.floor(Math.random() * 50) + 1;
        await this.lolApiService
          .getSummonersByTier(queue, tier, division, randomPage)
          .then((returnedSummoners) => {
            // we found a page with summoners, so pass it on
            summonersByTier = returnedSummoners;
          })
          .catch((error) => {
            throw error;
          });
      }
      // returned the list of accounts
      return summonersByTier;
    } catch (error) {
      throw error;
    }
  }

  /**
   * use the LoL API to get an account based on the given summoner name
   * @param summonerName: string
   * @returns account: Account
   */
  async getAccountBySummonerName(summonerName: string): Promise<Account> {
    try {
      let foundAccount: Account;
      await this.lolApiService
        .getSummonerBySummonerName(summonerName)
        .then((returnedAccount) => {
          // pass on the account
          foundAccount = returnedAccount;
        })
        .catch((error) => {
          throw error;
        });
      // returned the account
      return foundAccount;
    } catch (error) {
      throw error;
    }
  }
}
