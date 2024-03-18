import { Injectable } from '@nestjs/common';
import { CreateMaintenanceDto } from './dto/create-maintenance.dto';
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Maintenance, MaintenanceDocument } from './Schema/Maintenance';
import { Model, model } from 'mongoose';
import { serialize } from 'v8';

@Injectable()
export class MaintenanceService {
  constructor(
    @InjectModel(Maintenance.name)
    private maintenanceModel: Model<MaintenanceDocument>,
  ) {}
  create(createMaintenanceDto: CreateMaintenanceDto): Promise<Maintenance> {
    const model = new this.maintenanceModel();
    model.providerId = createMaintenanceDto.providerId;
    model.providerName = createMaintenanceDto.providerName;
    model.providerNumber = createMaintenanceDto.providerNumber;
    model.vehicletype = createMaintenanceDto.vehicletype;
    model.servicetype = createMaintenanceDto.servicetype;
    model.location = createMaintenanceDto.location;
    model.description = createMaintenanceDto.description;
    model.status = createMaintenanceDto.status;
    return model.save();
  }

  findAll(): Promise<Maintenance[]> {
    return this.maintenanceModel.find().exec();
  }

  findOne(id: string): Promise<Maintenance> {
    return this.maintenanceModel.findById(id).exec();
  }

  update(id: string, updateMaintenanceDto: UpdateMaintenanceDto) {
    return this.maintenanceModel.updateOne(
      { _id: id },
      {
        providerId: updateMaintenanceDto.providerId,
        providerName: updateMaintenanceDto.providerName,
        providerNumber: updateMaintenanceDto.providerNumber,
        vehicletype: updateMaintenanceDto.vehicletype,
        servicetype: updateMaintenanceDto.servicetype,
        location: updateMaintenanceDto.location,
        description: updateMaintenanceDto.description,
        status: updateMaintenanceDto.status,
      },
    );
  }

  remove(id: string) {
    return this.maintenanceModel.deleteOne({ _id: id });
  }
}
