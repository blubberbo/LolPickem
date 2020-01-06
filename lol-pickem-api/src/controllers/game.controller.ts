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
         async getGame(): Promise<any> {
           console.log(`Calling LolApi Service for a game`);
           // this is a test matchId
           const matchId = 3252546100;
           return await this.callLolApiGetGame(matchId);
           //return { gameId: 14};
         }
         async callLolApiGetGame(matchId: number): Promise<any> {
           return await this.lolApiService.getGame(matchId);
         }

        //  @get('/omdbapi/details/{title}')
        //  //ts-lint:disable-next-line: no-any
        //  async getDetails(
        //    @param.path.string('title') title: string,
        //  ): Promise<any> {
        //    const titleArray: Array<string> = title.split(' ');
        //    const requestTitle: string = titleArray.join('+');
        //    console.log(`Calling OmdbApi Service for movie/show: ${title}`);
        //    return await this.callOmdbapi(requestTitle);
        //  }
        //  async callOmdbapi(title: string): Promise<any> {
        //    let apiKey: string = 'your-api-key';
        //    return await this.omdbapiService.getDetails(apiKey, title);
        //  }
       }
