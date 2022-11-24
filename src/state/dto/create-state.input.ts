import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStateInput {

    @Field(() => String, { description: 'Name' })
    name: string;

    @Field(() => String, { description: 'UF' })
    uf: string;

    @Field(() => String, { description: 'Country id' })
    idcountry: string;

    @Field(() => Boolean, { description: 'Active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Date register', nullable: true })
    date_register?: Date;
}