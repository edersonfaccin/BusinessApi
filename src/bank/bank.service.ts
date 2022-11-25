import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { ListInput } from 'src/common/list.input';
import { CreateBankInput } from './dto/create-bank.input';
import { UpdateBankInput } from './dto/update-bank.input';
import { Bank } from './schemas/bank.schema';

@Injectable()
export class BankService {
    constructor(@InjectModel('Bank') private readonly model: Model<Bank>){ }

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
            throw new HttpException('Bank not found', HttpStatus.NOT_FOUND);
        }
    }

    async create(data: CreateBankInput) {
        const createdData = new this.model(data)
        return await createdData.save()
    }

    async update(id: string, data: UpdateBankInput) {
        await this.model.updateOne({ _id: id }, data).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }
}