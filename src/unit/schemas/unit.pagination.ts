import { Field, ObjectType } from '@nestjs/graphql';
import { Unit } from './unit.schema';

@ObjectType()
export class UnitPagination {

    @Field(() => [Unit])
    results: Unit[]

    @Field(() => Number, { description: 'Count pagination' })
    count: number;
}