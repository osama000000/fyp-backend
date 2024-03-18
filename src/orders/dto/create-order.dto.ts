import { Prop } from '@nestjs/mongoose';

export class CreateOrderDto {
  @Prop({ type: Object }) // Specify the type as Object
  data: object;
}
