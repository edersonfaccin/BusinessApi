import { CreateStateInput } from './create-state.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStateInput extends PartialType(CreateStateInput) {
    @Field(() => String)
    _id: string;
}