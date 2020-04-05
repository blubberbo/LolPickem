import { Game } from './game.model';
import { TeamType } from './enums/team-type.enum';

export class UserHistory {
  id: string;
  game: Game;
  guessedCorrectly: boolean;
  guessedTeam: TeamType;
  timestamp: Date;

  constructor(game: Game, guessedCorrectly: boolean, guessedTeam: TeamType) {
    this.game = game;
    this.guessedCorrectly = guessedCorrectly;
    this.guessedTeam = guessedTeam;
  }
}
