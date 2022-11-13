import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ListInput {
    @Field(() => Number, { description: 'Limit pagination' })
    limit: number;

    @Field(() => Number, { description: 'Offset pagination' })
    offset: number;
}