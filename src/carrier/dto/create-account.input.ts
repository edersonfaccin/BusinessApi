import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAccountInput {

    @Field(() => String, { description: 'Bank id' })
    idbank: string;

    @Field(() => String, { description: 'Agencia' })
    agency: string;

    @Field(() => String, { description: 'Conta corrente' })
    number_account: string;

    @Field(() => Boolean, { description: 'Active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Date register', nullable: true })
    date_register?: Date;
}