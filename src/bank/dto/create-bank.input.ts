import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBankInput {

    @Field(() => String, { description: 'Name' })
    name: string;

    @Field(() => Number, { description: 'Codigo' })
    code: number;

    @Field(() => Boolean, { description: 'Active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Date register', nullable: true })
    date_register?: Date;
}