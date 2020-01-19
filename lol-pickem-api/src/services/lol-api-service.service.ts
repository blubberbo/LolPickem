import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {LolApiDataSource} from '../datasources';
import {Account} from '../models';

export interface LolApiService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.

  /**
   * use the LoL API to get a match's info by matchId
   * @param matchId: number
   */
  getGame(matchId: number): Promise<any>;

  /**
   * use the LoL API to get a list of summoners by Queue, Tier, Division
   * @param queue: string
   * @param tier: string
   * @param division: string
   * @param page: number
   */
  getSummonersByTier(
    queue: string,
    tier: string,
    division: string,
    page: number,
  ): Promise<Array<Account>>;

  /**
   * use the LoL API to get a summoner account by summonerId
   * @param summonerId: string
   */
  getSummonerBySummonerId(summonerId: string): Promise<any>;
}

export class LolApiServiceProvider implements Provider<LolApiService> {
  constructor(
    // lolApi must match the name property in the datasource json file
    @inject('datasources.lolApi')
    protected dataSource: LolApiDataSource = new LolApiDataSource(),
  ) {}

  value(): Promise<LolApiService> {
    return getService(this.dataSource);
  }
}
