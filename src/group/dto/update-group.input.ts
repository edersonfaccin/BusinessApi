import { CreateGroupInput } from './create-group.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGroupInput extends PartialType(CreateGroupInput) {
    @Field(() => String)
    _id: string;
}