import { Field, ObjectType } from '@nestjs/graphql';
import { City } from './city.schema';

@ObjectType()
export class CityPagination {

    @Field(() => [City])
    results: City[]

    @Field(() => Number, { description: 'Count pagination' })
    count: number;
}