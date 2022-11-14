import { Field, ObjectType } from '@nestjs/graphql';
import { Color } from './color.schema';

@ObjectType()
export class ColorPagination {

    @Field(() => [Color])
    results: Color[]

    @Field(() => Number, { description: 'Count pagination' })
    count: number;
}