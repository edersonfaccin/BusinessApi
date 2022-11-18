import { Field, ObjectType } from '@nestjs/graphql';
import { Company } from './company.schema';

@ObjectType()
export class CompanyPagination {

    @Field(() => [Company])
    results: Company[]

    @Field(() => Number, { description: 'Count pagination' })
    count: number;
}