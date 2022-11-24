import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types, Schema as MongooseSchema } from 'mongoose';

export type MemberDocument = Member & Document;

@Schema()
@ObjectType()
export class Member {
    
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    @Field(() => String, { description: 'Member user id' })
    iduser: Types.ObjectId;

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Member active' })
    active: boolean;

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Member adm' })
    adm: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Member date register' })
    date_register: Date
}

export const MemberSchema = SchemaFactory.createForClass(Member);