import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

    @Field(() => String, { description: 'Name' })
    name: string;

    @Field(() => String, { description: 'Email' })
    email: string;

    @Field(() => String, { description: 'Senha' })
    password: string;

    @Field(() => Boolean, { description: 'Active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Date register', nullable: true })
    date_register?: Date;
}