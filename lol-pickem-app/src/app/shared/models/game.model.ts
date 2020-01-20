import { GameDetails } from './game-details.model';

export class Game {
  gameId: number;
  seasonId: number;
  queueId: number;
  gameDetails: GameDetails;
  constructor() {}
}
