import { UserHistory } from './user-history.model';
import { Document, Schema, Model, model } from 'mongoose';

export interface User extends Document {
  email: string;
  history?: UserHistory[];
}

export const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  history: Array,
});

export const User: Model<User> = model<User>('user', userSchema);
