import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Color, ColorSchema } from './schemas/color.schema';
import { ColorResolver } from './color.resolver';
import { ColorService } from './color.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Color.name, schema: ColorSchema 
    }])
  ],
  providers: [
    ColorService,
    ColorResolver
  ]
})
export class ColorModule {}