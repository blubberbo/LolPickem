// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {get, param} from '@loopback/rest';
import {LolApiService} from '../services/lol-api-service.service';
import {Account} from '../models';
import {randomBytes} from 'crypto';

export class GameController {
  constructor(
    @inject('services.LolApiService')
    protected lolApiService: LolApiService,
  ) {}

  /**
   * GET local API call to get a random account based on the given Queue, Tier and Division
   * @param queue: string
   * @param tier: string
   * @param division: string
   */
  @get('/game')
  async getGame(
    @param.query.string('queue') queue: string,
    @param.query.string('tier') tier: string,
    @param.query.string('division') division: string,
  ): Promise<any> {
    // create a random account
    let randomAccount: Account = new Account();
    // get a random account by the queue, tier and division
    await this.getRandomAccountByQueueTierDivision(queue, tier, division).then(
      returnedAccount => (randomAccount = returnedAccount),
    );

    return randomAccount;
    // get the game information from that game and return it
    // const matchId = 3252546100;
    // return await this.callLolApiGetGame(matchId);
  }

  /**
   * GET local API call to get a summoner account by summoner id
   * @param summonerId: string
   */
  @get('/summoner')
  async getSummoner(
    @param.query.string('summonerId') summonerId: string,
  ): Promise<any> {
    return await this.lolApiService.getSummonerBySummonerId(summonerId);
  }

  /**
   * use the LoL API to get a random account based on the given Queue, Tier and Division
   * @param queue: string
   * @param tier: string
   * @param division: string
   */
  async getSummonersByTier(
    queue: string,
    tier: string,
    division: string,
  ): Promise<Array<Account>> {
    let summonersByTier: Array<Account> = [];
    // while no summoners are returned
    while (summonersByTier.length === 0) {
      // we can assume there are at least 50 pages of summoners
      // create a random number from 1-50 to get a random page
      const randomPage = Math.floor(Math.random() * 50) + 1;
      await this.lolApiService
        .getSummonersByTier(queue, tier, division, randomPage)
        .then(returnedSummoners => {
          // we found a page with summoners, so pass it on
          summonersByTier = returnedSummoners;
        });
    }
    // returned the list of accounts
    return summonersByTier;
  }

  /**
   * local method to get a random account based on the given Queue, Tier and Division
   * @param queue: string
   * @param tier: string
   * @param division: string
   */
  async getRandomAccountByQueueTierDivision(
    @param.query.string('queue') queue: string,
    @param.query.string('tier') tier: string,
    @param.query.string('division') division: string,
  ): Promise<any> {
    // create a list of summoners
    let accountsList: Array<Account> = [];
    // get a random summoner from the tier that was passed in
    await this.getSummonersByTier(queue, tier, division).then(
      returnedSummoners => (accountsList = returnedSummoners),
    );
    // get a random account from the returned list
    // create the new summoner account as a new account, to strip off the fields we don't want in the constructor method
    const randomAccount: Account = new Account(
      accountsList[Math.floor(Math.random() * accountsList.length)],
    );
    // the summoner account we have will be missing the accountId, do we need to retrieve it
    await this.lolApiService
      .getSummonerBySummonerId(randomAccount.summonerId)
      .then(
        returnedSummoner =>
          (randomAccount.accountId = returnedSummoner.accountId),
      );
    // find a random game that account participated in
    return randomAccount;
  }

  /**
   * use the LoL API to get info for a single game
   * @param matchId: number
   */
  async callLolApiGetGame(matchId: number): Promise<any> {
    return await this.lolApiService.getGame(matchId);
  }
}
