import { Document, Schema, Model, model } from 'mongoose';

export interface ApiLog extends Document {
  endpoint: string;
  origin: string;
  timestamp: Date;
}

export const apiLogSchema = new Schema({
  endpoint: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  timestamp: { type: Date, required: true, default: Date.now },
});

export const ApiLog: Model<ApiLog> = model<ApiLog>('apiLog', apiLogSchema);
