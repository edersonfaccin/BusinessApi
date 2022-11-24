import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.schema';

@ObjectType()
export class UserPagination {

    @Field(() => [User])
    results: User[]

    @Field(() => Number, { description: 'Count pagination' })
    count: number;
}