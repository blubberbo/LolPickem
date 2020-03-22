import { Document, Schema, Model, model } from 'mongoose';
import { Game } from '.';

export class UserHistory {
  id: string;
  game: Game;
  guessedCorrectly: boolean;
  timestamp: Date;
}
