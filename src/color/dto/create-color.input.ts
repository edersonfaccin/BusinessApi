import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateColorInput {

    @Field(() => String, { description: 'Name' })
    name: string;

    @Field(() => Boolean, { description: 'Active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Date register', nullable: true })
    date_register?: Date;
}