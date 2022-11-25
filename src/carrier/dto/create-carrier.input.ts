import { InputType, Field } from '@nestjs/graphql';
import { CreateAccountInput } from './create-account.input';
import { CreatePixInput } from './create-pix.input';

@InputType()
export class CreateCarrierInput {

    @Field(() => String, { description: 'Name' })
    name: string;

    @Field(() => String, { description: 'Nick Name', nullable: true })
    nick_name: string;

    @Field(() => String, { description: 'CNPJ', nullable: true })
    national_identifier: string;

    @Field(() => String, { description: 'Inscricao estadual', nullable: true })
    state_identifier: string;

    @Field(() => String, { description: 'Inscricao municipal', nullable: true })
    municipal_identifier: string;

    @Field(() => String, { description: 'Endereco', nullable: true })
    address: string;

    @Field(() => String, { description: 'Complemento', nullable: true })
    complement: string;

    @Field(() => String, { description: 'Bairro', nullable: true })
    district: string;

    @Field(() => String, { description: 'CEP', nullable: true })
    zip_code: string;

    @Field(() => String, { description: 'Cidade', nullable: true })
    city: string;

    @Field(() => String, { description: 'Phone', nullable: true })
    phone: string;

    @Field(() => String, { description: 'Celular', nullable: true })
    cellphone: string;

    @Field(() => String, { description: 'Email', nullable: true })
    email: string;

    @Field(() => String, { description: 'Contato', nullable: true })
    contact: string;

    @Field(() => [CreateAccountInput], { description: 'Accounts this company', nullable: true })
    accounts: Array<CreateAccountInput>;

    @Field(() => [CreatePixInput], { description: 'Pixs this company', nullable: true })
    pixs: Array<CreatePixInput>;

    @Field(() => Boolean, { description: 'Active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Date register', nullable: true })
    date_register?: Date;
}