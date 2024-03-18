import { Prop } from '@nestjs/mongoose';
import { User } from 'src/auth/Schema/user';

export class CreateFuelBookingDto {
  @Prop({ type: Object }) // Specify the type as Object
  location: object;

  @Prop()
  fueltype: string;
  @Prop()
  litre: string;
  @Prop()
  paymentMethod: string;
  @Prop()
  price: string;
  @Prop()
  status: string;
  @Prop()
  userId: User;
}
