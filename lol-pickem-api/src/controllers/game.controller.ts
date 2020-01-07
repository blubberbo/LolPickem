// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {get, param} from '@loopback/rest';
import {LolApiService} from '../services/lol-api-service.service';

export class GameController {
         constructor(
           @inject('services.LolApiService')
           protected lolApiService: LolApiService,
         ) {}

         @get('/game')
         async getGame(
           @param.query.string('queue') queue: string,
           @param.query.string('tier') tier: string,
           @param.query.string('division') division: string
         ): Promise<any> {
           // get a random account from the tier that was passed in
           
           // find a random game that account participated in

           // get the game information from that game and return it
           const matchId = 3252546100;
           return await this.callLolApiGetGame(matchId);
           
         }
         async callLolApiGetGame(matchId: number): Promise<any> {
           return await this.lolApiService.getGame(matchId);
         }

       }
