import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from './schemas/company.schema';
import { CompanyResolver } from './company.resolver';
import { CompanyService } from './company.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Company.name, schema: CompanySchema 
    }])
  ],
  providers: [
    CompanyService,
    CompanyResolver
  ]
})
export class CompanyModule {}