import { Field, ObjectType } from '@nestjs/graphql';
import { Carrier } from './carrier.schema';

@ObjectType()
export class CarrierPagination {

    @Field(() => [Carrier])
    results: Carrier[]

    @Field(() => Number, { description: 'Count pagination' })
    count: number;
}