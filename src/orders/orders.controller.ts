import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrderService } from './orders.service';
import { Order } from './Schema/orders';
import { JwtAuthGuard } from 'src/jwt-auth.guard';
import { ApiOperation } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';

// orders/order.controller.ts

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @UseGuards(JwtAuthGuard)
  @Post('posting')
  create(@Body() CreateOrderDto: CreateOrderDto) {
    return this.orderService.create(CreateOrderDto);
  }
  // async getOrdersForUser(@Req() req): Promise<Order[]> {
  //   const userId = req.user.id;
  //   return this.orderService.findByUserId(userId);
  // }

  @Get('byUserId/:userId')
  @ApiOperation({ summary: 'get all carwashes by userId' })
  async findByUserId(@Param('userId') userId: string) {
    const orders = await this.orderService.findByUserId(userId);
    return orders;
  }
}
