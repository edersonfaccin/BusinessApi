import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types, Schema as MongooseSchema } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
@ObjectType()
export class Account {
    
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Bank' })
    @Field(() => String, { description: 'Account bank id' })
    idbank: Types.ObjectId;

    @Prop({ required: true, default: true })
    @Field(() => String, { description: 'Account agency' })
    agency: string;

    @Prop({ required: true, default: true })
    @Field(() => String, { description: 'Account number account' })
    number_account: string;

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Account active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Account date register' })
    date_register: Date
}

export const AccountSchema = SchemaFactory.createForClass(Account);