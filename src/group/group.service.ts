import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { ListInput } from 'src/common/list.input';
import { CreateGroupInput } from './dto/create-group.input';
import { UpdateGroupInput } from './dto/update-group.input';
import { Group } from './schemas/group.schema';

@Injectable()
export class GroupService {
    constructor(@InjectModel('Group') private readonly model: Model<Group>){ }

    async getAllReport() {
        const results = await this.model.find()
        
        return results
    }

    async getAllPage(pagination: ListInput) {
        const { limit, offset } = pagination;

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
            throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
        }
    }

    async create(data: CreateGroupInput) {
        const createdData = new this.model(data)
        return await createdData.save()
    }

    async update(id: string, data: UpdateGroupInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }
}