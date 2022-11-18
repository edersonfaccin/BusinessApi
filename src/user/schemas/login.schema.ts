import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

@ObjectType()
export class Login {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => String, { description: 'Nome' })
    name: string;

    @Field(() => String, { description: 'Email' })
    email: string;

    @Field(() => String, { description: 'Access token' })
    access_token: string;
}