import { Field, ObjectType } from '@nestjs/graphql';
import { Category } from './category.schema';

@ObjectType()
export class CategoryPagination {

    @Field(() => [Category])
    results: Category[]

    @Field(() => Number, { description: 'Count pagination' })
    count: number;
}