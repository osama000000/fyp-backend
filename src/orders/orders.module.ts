// orders/orders.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './Schema/orders';
import { OrderService } from './orders.service';
import { OrderController } from './orders.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrdersModule {}
