import { CreateColorInput } from './create-color.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateColorInput extends PartialType(CreateColorInput) {
    @Field(() => String)
    _id: string;
}