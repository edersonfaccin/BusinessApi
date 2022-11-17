import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUnitInput {

    @Field(() => String, { description: 'Name' })
    name: string;

    @Field(() => String, { description: 'Sigla' })
    initials: string;

    @Field(() => Boolean, { description: 'Active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Date register', nullable: true })
    date_register?: Date;
}