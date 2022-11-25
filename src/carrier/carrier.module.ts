import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Carrier, CarrierSchema } from './schemas/carrier.schema';
import { CarrierResolver } from './carrier.resolver';
import { CarrierService } from './carrier.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Carrier.name, schema: CarrierSchema 
    }])
  ],
  providers: [
    CarrierService,
    CarrierResolver
  ]
})
export class CarrierModule {}