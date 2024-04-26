import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { MulterModule } from '@nestjs/platform-express';
import {diskStorage} from 'multer';
import * as fs from 'fs';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'user', schema:UserSchema }]),
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, cb) => {
          const uploadDir = './uploads';
          if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
          }
          cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, file.originalname); // Use the original filename provided by the user
        },
      }),
    }),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
