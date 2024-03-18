import { Prop } from '@nestjs/mongoose';

export class CreateMaintenanceDto {
  @Prop()
  providerId: string;
  @Prop()
  providerNumber: string;
  @Prop()
  providerName: string;
  @Prop()
  vehicletype: string;
  @Prop()
  servicetype: string;
  @Prop()
  location: string;
  @Prop()
  description: string;
  @Prop()
  status: string;
}
