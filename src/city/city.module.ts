import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from './schemas/city.schema';
import { CityResolver } from './city.resolver';
import { CityService } from './city.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: City.name, schema: CitySchema 
    }])
  ],
  providers: [
    CityService,
    CityResolver
  ]
})
export class CityModule {}