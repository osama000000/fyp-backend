import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('car')
@ApiTags('CAR')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post('create')
  @ApiOperation({ summary: 'Enter your details including an image' })
  @UseInterceptors(FileInterceptor('carImage')) // Assuming 'carImage' is the name attribute in your form for the file input
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  @ApiOperation({ summary: 'get all  your details' })
  findAll() {
    return this.carService.findAll();
  }

  // ////
  @Get(':id')
  @ApiOperation({ summary: 'get  your details by Id' })
  findOne(@Param('id') id: string) {
    return this.carService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update  your details' })
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(id, updateCarDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'delete  your details' })
  remove(@Param('id') id: string) {
    return this.carService.remove(id);
  }
}
// ......................................//////////////////////////////
