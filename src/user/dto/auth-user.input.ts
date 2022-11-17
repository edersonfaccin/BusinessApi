import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthUserInput {

    @Field(() => String, { description: 'Email' })
    email: string;

    @Field(() => String, { description: 'Senha' })
    password: string;
}