import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BankModule } from './bank/bank.module';
import { CarrierModule } from './carrier/carrier.module';
import { CategoryModule } from './category/category.module';
import { CityModule } from './city/city.module';
import { ColorModule } from './color/color.module';
import { CompanyModule } from './company/company.module';
import { CountryModule } from './country/country.module';
import { GroupModule } from './group/group.module';
import { StateModule } from './state/state.module';
import { UnitModule } from './unit/unit.module';
import { UserModule } from './user/user.module';

require('dotenv').config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    }),
    ColorModule,
    AuthModule,
    UserModule,
    UnitModule,
    GroupModule,
    CategoryModule,
    CompanyModule,
    CountryModule,
    StateModule,
    CityModule,
    BankModule,
    CarrierModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    AppResolver
  ],
})
export class AppModule {}
