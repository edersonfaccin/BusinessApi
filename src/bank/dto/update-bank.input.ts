import { CreateBankInput } from './create-bank.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBankInput extends PartialType(CreateBankInput) {
    @Field(() => String)
    _id: string;
}