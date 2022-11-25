import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Bank, BankSchema } from './schemas/bank.schema';
import { BankResolver } from './bank.resolver';
import { BankService } from './bank.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: Bank.name, schema: BankSchema 
    }])
  ],
  providers: [
    BankService,
    BankResolver
  ]
})
export class BankModule {}