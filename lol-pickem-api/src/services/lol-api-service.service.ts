import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {LolApiDataSource} from '../datasources';

export interface LolApiService {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getGame(matchId: number): Promise<any>;
  getAccountsByTier(queue: string, tier: string, division: string, page: number): Promise<any>;
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
