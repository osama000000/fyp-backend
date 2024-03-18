import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/Schema/user';

export class CreateCarwashDto {
  @Prop({ type: Object }) // Specify the type as Object
  location: object;

  cartype: string;

  servicetype: string;

  price: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  userId: User;

  status: string;
}
