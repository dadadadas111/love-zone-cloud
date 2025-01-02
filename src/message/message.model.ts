import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
  @Prop({ required: true })
  message: string;

  @Prop({ required: true })
  sender: string;

  @Prop({ required: true })
  time: number;

  @Prop({ required: true })
  loveCode: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
