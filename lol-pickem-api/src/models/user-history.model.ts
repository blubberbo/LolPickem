import { Game } from '.';
import { TeamType } from 'constants/team-type.enum';

export class UserHistory {
  id: string;
  game: Game;
  guessedCorrectly: boolean;
  guessedTeam: TeamType;
  timestamp: Date;
}
