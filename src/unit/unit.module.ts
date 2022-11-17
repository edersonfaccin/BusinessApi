import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Unit, UnitSchema } from './schemas/unit.schema';
import { UnitResolver } from './unit.resolver';
import { UnitService } from './unit.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Unit.name, schema: UnitSchema 
    }])
  ],
  providers: [
    UnitService,
    UnitResolver
  ]
})
export class UnitModule {}