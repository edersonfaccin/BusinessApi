import { Field, ObjectType } from '@nestjs/graphql';
import { Bank } from './bank.schema';

@ObjectType()
export class BankPagination {

    @Field(() => [Bank])
    results: Bank[]

    @Field(() => Number, { description: 'Count pagination' })
    count: number;
}