import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types, Schema as MongooseSchema } from 'mongoose';

export type PixDocument = Pix & Document;

@Schema()
@ObjectType()
export class Pix {
    
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, default: true })
    @Field(() => String, { description: 'Pix code' })
    code: string;

    @Prop({ required: true, default: true })
    @Field(() => Boolean, { description: 'Pix active' })
    active: boolean;

    @Prop({ required: true, default: Date.now() })
    @Field(() => Date, { description: 'Pix date register' })
    date_register: Date
}

export const PixSchema = SchemaFactory.createForClass(Pix);