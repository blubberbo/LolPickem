import { Account, Game, Matchlist } from '../models';
import { LolApiService } from './lol-api.service';

export class GameService {
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
      // create a list of summoners
      let accountsList: Array<Account> = [];
      // get a random summoner from the tier that was passed in
      await this.getSummonersByTier(queue, tier, division)
        .then(returnedSummoners => (accountsList = returnedSummoners))
        .catch(error => {
          throw new Error(error);
        });
      // get a random account from the returned list
      // create the new summoner account as a new account, to strip off the fields we don't want in the constructor method
      const randomAccount: Account =
        accountsList[Math.floor(Math.random() * accountsList.length)];
      // the summoner account we have will be missing the accountId, do we need to retrieve it
      await this.lolApiService
        .getSummonerBySummonerId(randomAccount.summonerId)
        .then(
          returnedSummoner =>
            (randomAccount.accountId = returnedSummoner.accountId),
        )
        .catch(error => {
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
   * @returns summonersByTier: Array<Account>
   */
  async getSummonersByTier(
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
          .then(returnedSummoners => {
            // we found a page with summoners, so pass it on
            summonersByTier = returnedSummoners;
          })
          .catch(error => {
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
   * local method to get a random match
   * @param accountId: string
   * @returns randomGame: Game
   */
  async getRandomMatchForAccountId(accountId: string): Promise<Game> {
    try {
      // create a matchlist
      let matchlist: Matchlist = new Matchlist();
      // get the base matchlist for the given accountId
      await this.lolApiService
        .getMatchlistByAccountId(accountId, 0)
        .then(returnedMatchlist => (matchlist = returnedMatchlist));
      // before we get a random game from all the games, we need to get a random subset of the matchlist
      // check if the total number of games is greater than 100 (which is roughly the number of games on this list)
      if (matchlist.totalGames > 100) {
        // we want to get a random game from all the games
        // get a random group of 100 games based on how many total games there are
        // start by seeing how many groups of 100 games there are in the total games
        const groupsOf100Games = Math.ceil(matchlist.totalGames / 100);
        // get a random number from 0 to the number of groups of 100 games
        const randomGroupNumber = Math.floor(Math.random() * groupsOf100Games);
        // if the random number that was selected was not 0
        if (randomGroupNumber !== 0) {
          // then we need to get a new starting index in order to get a new matchlist
          // multiply the random group number by 100 to get the new new (random) starting index
          const randomStartingIndex = randomGroupNumber * 100;
          // call the api service again to get a new matchlist for this accountId, starting at the new (random) index
          await this.lolApiService
            .getMatchlistByAccountId(accountId, randomStartingIndex)
            .then(returnedMatchlist => (matchlist = returnedMatchlist))
            .catch(error => {
              throw error;
            });
        }
      }
      // at this point, we either have the original matchlist or we have a random matchlist from all the games for the given accountId
      // create a variable to house our random game
      let randomGame: Game = new Game();
      // now we get a random game from the matchlist, checking to make sure the game is being played with queueId = 420
      // according to: http://static.developer.riotgames.com/docs/lol/queues.json
      //   {
      //     "queueId": 420,
      //     "map": "Summoner's Rift",
      //     "description": "5v5 Ranked Solo games",
      //     "notes": null
      // }
      while (randomGame.queueId !== 420) {
        // so long as the game is not a classic game, keep picking a new one from the list
        randomGame =
          matchlist.matches[
            Math.floor(Math.random() * matchlist.matches.length)
          ];

        // we have a random game, but all we have is the gameId
        // so we need to get the rest of the game information and load it by creating a new Game()
        await this.lolApiService
          .getMatchByMatchId(randomGame.gameId)
          .then(returnedMatch => {
            randomGame = new Game(returnedMatch);
          })
          .catch(error => {
            throw error;
          });
      }
      return randomGame;
    } catch (error) {
      throw error;
    }
  }
}
