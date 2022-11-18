import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Member, MemberSchema } from './member.schema';

export type CompanyDocument = Company & Document;

@Schema()
@ObjectType()
export class Company {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Name' })
    name: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Nome fantasia' })
    nick_name: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'cnpj' })
    national_identifier: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'inscricao estadual' })
    state_identifier: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'inscricao municipal' })
    municipal_identifier: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Endereco' })
    address: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Complemento' })
    complement: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Bairro' })
    district: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Cep' })
    zip_code: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Cidade' })
    city: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Fone' })
    phone: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Celular' })
    cellphone: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Email' })
    email: string;

    @Prop({ required: false, default: '' })
    @Field(() => String, { description: 'Contato' })
    contact: string;

    @Prop({ type: [MemberSchema] })
    @Field(() => [Member], { description: 'Member at this company' })
    users: Types.Array<Member>

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Date register' })
    date_register: Date
}

export const CompanySchema = SchemaFactory.createForClass(Company);