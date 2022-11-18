import { InputType, Field } from '@nestjs/graphql';
import { CreateMemberInput } from './create-member.input';

@InputType()
export class CreateCompanyInput {

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

    @Field(() => [CreateMemberInput], { description: 'User at this company', nullable: true })
    users: Array<CreateMemberInput>;

    @Field(() => Boolean, { description: 'Active', nullable: true })
    active: boolean;

    @Field(() => Date, { description: 'Date register', nullable: true })
    date_register?: Date;
}