import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { user } from './schema/user.schema';
@Injectable()
export class UserService {
    constructor(@InjectModel('user') private userModel:Model<user>){}

    async create(userdto:UserDto): Promise<user>{
        const user= new this.userModel(userdto);
        return user.save();

    }

    async login(username:String, password:String): Promise<user>{

        return this.userModel.findOne(username,password).exec();
        
    }
}
 