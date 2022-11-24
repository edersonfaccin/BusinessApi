import { Field, ObjectType } from '@nestjs/graphql';
import { State } from './state.schema';

@ObjectType()
export class StatePagination {

    @Field(() => [State])
    results: State[]

    @Field(() => Number, { description: 'Count pagination' })
    count: number;
}