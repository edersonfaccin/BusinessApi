import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, SchemaTypes, Types } from 'mongoose';

export type CityDocument = City & Document;

@Schema()
@ObjectType()
export class City {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Name' })
    name: string;

    @Prop({ type: SchemaTypes.ObjectId, ref: 'State' })
    @Field(() => String, { description: 'State id' })
    idstate: Types.ObjectId;

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Date register' })
    date_register: Date
}

export const CitySchema = SchemaFactory.createForClass(City);