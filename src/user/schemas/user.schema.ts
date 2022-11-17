import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Nome' })
    name: string;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Email' })
    email: string;

    @Prop({ required: true, default: '' })
    @Field(() => String, { description: 'Senha' })
    password: string;

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Date register' })
    date_register: Date
}

export const UserSchema = SchemaFactory.createForClass(User);