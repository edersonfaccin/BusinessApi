import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMemberInput {

    @Field(() => String, { description: 'User id' })
    iduser: string;

    @Field(() => Boolean, { description: 'Active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Date register', nullable: true })
    date_register?: Date;
}