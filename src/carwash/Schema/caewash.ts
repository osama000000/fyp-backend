import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/auth/Schema/user';

export type CarwashDocument = Carwash & Document;
@Schema()
export class Carwash {
  @Prop({ type: Object }) // Specify the type as Object
  location: object;
  @Prop()
  cartype: string;
  @Prop()
  servicetype: string;
  @Prop()
  price: string;
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  userId: User;
  @Prop()
  status: string;
}
export const CarwashSchema = SchemaFactory.createForClass(Carwash);
