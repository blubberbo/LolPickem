const fetch = require('node-fetch');

const lolApiConstants = {
  baseURL: 'https://na1.api.riotgames.com',
  httpOptions: {
    headers: {
      'content-type': 'application/json',
      'X-Riot-Token': process.env.LOL_API_KEY,
    },
    responseType: 'json',
    resolveBodyOnly: true,
    method: 'get',
  },
};
export class LolApiService {
  /**
   * use the LoL API to get a list of summoners by Queue, Tier, Division
   * @param queue: string
   * @param tier: string
   * @param division: string
   * @param page: number
   * @returns promise with a body that includes an Array of Accounts
   */
  getSummonersByTier(
    queue: string,
    tier: string,
    division: string,
    page: number,
  ): Promise<any> {
    return fetch(
      `${lolApiConstants.baseURL}/lol/league/v4/entries/${queue}/${tier}/${division}?page=${page}`,
      lolApiConstants.httpOptions,
    )
      .then((res: any) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .catch((error) => {
        throw error;
      });
  }

  /**
   * use the LoL API to get a summoner account by summonerId
   * @param summonerId: string
   * @returns promise with a body that includes an Account object
   */
  getSummonerBySummonerId(summonerId: string): Promise<any> {
    return fetch(
      `${lolApiConstants.baseURL}/lol/summoner/v4/summoners/${summonerId}`,
      lolApiConstants.httpOptions,
    )
      .then((res: any) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .catch((error) => {
        throw error;
      });
  }

  /**
   * use the LoL API to get a summoner account by summoner name
   * @param summonerName: string
   * @returns promise with a body that includes an Account object
   */
  getSummonerBySummonerName(summonerName: string): Promise<any> {
    return fetch(
      `${lolApiConstants.baseURL}/lol/summoner/v4/summoners/by-name/${summonerName}`,
      lolApiConstants.httpOptions,
    )
      .then((res: any) => {
        // if the result is a 404, we still want to pass it to the front end, but not as an error
        if (!res.ok && res.status !== 404) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .catch((error) => {
        throw error;
      });
  }

  /**
   * use the LoL API to get a matchlist by accountId and beginIndex
   * @param accountId: string
   * @param beginIndex: number
   * @returns promise with a body of type Matchlist
   */
  getMatchlistByAccountId(accountId: string, beginIndex: number): Promise<any> {
    // check to make sure the game is being played with queueId = 420
    // according to: http://static.developer.riotgames.com/docs/lol/queues.json
    //   {
    //     "queueId": 420,
    //     "map": "Summoner's Rift",
    //     "description": "5v5 Ranked Solo games",
    //     "notes": null
    // }
    return fetch(
      `${lolApiConstants.baseURL}/lol/match/v4/matchlists/by-account/${accountId}?beginIndex=${beginIndex}&queue=420`,
      lolApiConstants.httpOptions,
    )
      .then((res: any) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .catch((error) => {
        throw error;
      });
  }

  /**
   * use the LoL API to get a match by matchId
   * @param matchId: number
   * @returns a promise with body of type Game
   */
  getMatchByMatchId(matchId: number): Promise<any> {
    return fetch(
      `${lolApiConstants.baseURL}/lol/match/v4/matches/${matchId}`,
      lolApiConstants.httpOptions,
    )
      .then((res: any) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .catch((error) => {
        throw error;
      });
  }
}
