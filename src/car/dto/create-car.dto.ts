import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Provider } from 'src/auth/Schema/Provider';
import { User } from 'src/auth/Schema/user';

export class CreateCarDto {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Provider' }])
  provider: Provider;

  @Prop()
  providerName: string;
  // @Prop()
  // carImage: string;
  @Prop()
  providerPhoneNumber: string;

  @Prop()
  name: string;

  @Prop()
  model: string;

  @Prop()
  condition: string;

  @Prop()
  price: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop({ type: Object }) // Specify the type as Object
  location: object;
}
