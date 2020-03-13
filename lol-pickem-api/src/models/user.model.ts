import { UserHistory } from './user-history.model';
import { Document, Schema, Model, model, Error } from 'mongoose';

export interface User extends Document {
  id: string;
  email: string;
  history?: UserHistory[];
}

export const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: String,
  history: Array,
});

// export const Product: Model<User> = model<User>('User', userSchema);
