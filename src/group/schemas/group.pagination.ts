import { Field, ObjectType } from '@nestjs/graphql';
import { Group } from './group.schema';

@ObjectType()
export class GroupPagination {

    @Field(() => [Group])
    results: Group[]

    @Field(() => Number, { description: 'Count pagination' })
    count: number;
}