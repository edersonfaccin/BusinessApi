import { Field, ObjectType } from '@nestjs/graphql';
import { Country } from './country.schema';

@ObjectType()
export class CountryPagination {

    @Field(() => [Country])
    results: Country[]

    @Field(() => Number, { description: 'Count pagination' })
    count: number;
}