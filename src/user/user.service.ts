import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt'
import { AuthService } from '../auth/auth.service';
import { AuthUserInput } from './dto/auth-user.input';
import { ListInput } from 'src/common/list.input';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly model: Model<User>,
        private authservice: AuthService
    ){ }

    async getById(id: string) {
        try {
            return await this.model.findById(id).exec()
        } catch (error) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    }

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

    async login(user: AuthUserInput): Promise<any>{
        const resultUser = await this.validateUser(user.email, user.password)

        if(resultUser){
          return this.authservice.generateJWT(resultUser)
        }else{
          return {
            _id: '',
            name: '',
            email: '',
            access_token: ''
          }        
        }
    }

    async getOneByEmail(email: string) {
        try {
          return await this.model.findOne({ 
            where: { 
              email: email 
            }
          })
        } catch (error) {
          return error;
        }
    }

    async create(data: CreateUserInput) {
        let user = new CreateUserInput()

        user = data
        user.password = bcrypt.hashSync(data.password, 8)

        const createdData = new this.model(user)
        return await createdData.save()
    }

    async update(id: string, data: UpdateUserInput) {
        const updatedData = await this.model.findById(id).exec();

        Object.keys(data).forEach((key) => {
            if(key == 'password'){
              updatedData[key] = bcrypt.hashSync(updatedData[key], 8)
            }else{
              updatedData[key] = data[key];
            }
        });

        await this.model.updateOne({ _id: id }, updatedData).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        const data = await this.getById(id);
        
        return data.remove();
    }

    async validateUser(email: string, password: string): Promise<any | CreateUserInput>{
        const user = await this.getOneByEmail(email)

        if(user){
          if(user.active){
            if(await this.authservice.comparePasswords(password, user.password)){
              return user
            }else{
              return null
            }
          }else{
            throw new Error("User inactive");
          }
        }else{
          throw new Error("User not found");
        }
    }
}