import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePixInput {

    @Field(() => String, { description: 'Code pix' })
    code: string;

    @Field(() => Boolean, { description: 'Active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Date register', nullable: true })
    date_register?: Date;
}