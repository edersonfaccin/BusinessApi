import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, SchemaTypes, Types } from 'mongoose';

export type StateDocument = State & Document;

@Schema()
@ObjectType()
export class State {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Name' })
    name: string;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'UF' })
    uf: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'Country' })
    @Field(() => String, { description: 'Country id' })
    idcountry: Types.ObjectId;

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Date register' })
    date_register: Date
}

export const StateSchema = SchemaFactory.createForClass(State);