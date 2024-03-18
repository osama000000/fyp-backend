import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type OrderDocument = Order & Document;
@Schema()
export class Order {
  @Prop({ type: Object }) // Specify the type as Object
  data: object;
  // @Prop()
  // orderDetails: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  // userId: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Provider' })
  // providerId: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
