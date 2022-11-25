import { CreateCarrierInput } from './create-carrier.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarrierInput extends PartialType(CreateCarrierInput) {
    @Field(() => String)
    _id: string;
}