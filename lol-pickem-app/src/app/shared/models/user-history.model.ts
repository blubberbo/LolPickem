import { Game } from './game.model';

export class UserHistory {
  id: string;
  game: Game;
  guessedCorrectly: boolean;
  timestamp: Date;

  constructor(game: Game, guessedCorrectly: boolean) {
    this.game = game;
    this.guessedCorrectly = guessedCorrectly;
  }
}
