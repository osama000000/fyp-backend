import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from './Schema/car';
import { Model } from 'mongoose';
import { Carbooking, CarbookingDocument } from './Schema/carbooking';
import { CarbookingDto } from './dto/carbooking.dto';
import { UpdatebookingDto } from './dto/updatebooking.dto';
import { User } from 'src/auth/Schema/user';
import { CloudinaryService } from 'src/cloudinary.service';

import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads', // Set the upload destination folder
    filename: (req, file, cb) => {
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      cb(null, `${randomName}${extname(file.originalname)}`);
    },
  }),
};
@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name) private carModel: Model<CarDocument>,
    @InjectModel(Carbooking.name)
    private carbookingModel: Model<CarbookingDocument>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  createbooking(carbookingDto: CarbookingDto): Promise<Carbooking> {
    const model = new this.carbookingModel();
    model.name = carbookingDto.name;
    model.carmodel = carbookingDto.carmodel;
    model.city = carbookingDto.city;
    model.date = carbookingDto.date;
    model.car = carbookingDto.car;
    model.user = carbookingDto.user;
    model.status = carbookingDto.status;
    return model.save();
  }

  findAllbooking(): Promise<Carbooking[]> {
    return this.carbookingModel.find().exec();
  }

  findOnebooking(id: string): Promise<Carbooking> {
    return this.carbookingModel.findById(id).exec();
  }

  updatebooking(id: string, updatebookingDto: UpdatebookingDto) {
    return this.carbookingModel.updateOne(
      { _id: id },
      {
        name: updatebookingDto.name,
        carmodel: updatebookingDto.carmodel,
        city: updatebookingDto.city,
        date: updatebookingDto.date,
        car: updatebookingDto.car,
        user: updatebookingDto.user,
        status: updatebookingDto.status,
      },
    );
  }

  removebooking(id: string) {
    return this.carbookingModel.deleteOne({ _id: id });
  }

  // .............car booking ends here......................
  create(createCarDto: CreateCarDto): Promise<Car> {
    const model = new this.carModel({});

    model.provider = createCarDto.provider;
    model.providerName = createCarDto.providerName;
    model.providerPhoneNumber = createCarDto.providerPhoneNumber;
    // model.carImage = createCarDto.carImage;
    model.location = createCarDto.location;
    model.name = createCarDto.name;
    model.model = createCarDto.model;
    model.condition = createCarDto.condition;
    model.price = createCarDto.price;
    model.description = createCarDto.description;
    model.status = createCarDto.status;

    return model.save();
  }

  findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  findOne(id: string): Promise<Car> {
    return this.carModel.findById(id).exec();
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return this.carModel.updateOne(
      { _id: id },
      {
        providerId: updateCarDto.provider,
        providerName: updateCarDto.providerName,
        providerPhoneNumber: updateCarDto.providerPhoneNumber,
        // carImage: updateCarDto.carImage,
        location: updateCarDto.location,
        name: updateCarDto.name,
        model: updateCarDto.model,
        condition: updateCarDto.condition,
        price: updateCarDto.price,
        description: updateCarDto.description,
        provider: updateCarDto.provider,
        status: updateCarDto.status,
      },
    );
  }

  remove(id: string) {
    return this.carModel.deleteOne({ _id: id });
  }
}
