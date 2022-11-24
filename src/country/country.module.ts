import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from './schemas/country.schema';
import { CountryResolver } from './country.resolver';
import { CountryService } from './country.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Country.name, schema: CountrySchema 
    }])
  ],
  providers: [
    CountryService,
    CountryResolver
  ]
})
export class CountryModule {}