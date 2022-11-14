import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { ListInput } from 'src/common/list.input';
import { CreateColorInput } from './dto/create-color.input';
import { UpdateColorInput } from './dto/update-color.input';
import { Color } from './schemas/color.schema';

@Injectable()
export class ColorService {
    constructor(@InjectModel('Color') private readonly model: Model<Color>){ }

    async getAllPage(pagination: ListInput) {
        const { limit, offset } = pagination;

        //return await this.model.find().skip(offset).limit(limit).exec()
        const results = await this.model.find().skip(offset).limit(limit).exec()
        const count = await this.model.countDocuments()

        return {
            results,
            count
        }
    }

    async getById(id: string) {
        try {
            return await this.model.findById(id).exec()
        } catch (error) {
            throw new HttpException('Color not found', HttpStatus.NOT_FOUND);
        }
    }

    async create(data: CreateColorInput) {
        const createdData = new this.model(data)
        return await createdData.save()
    }

    async update(id: string, data: UpdateColorInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }
}