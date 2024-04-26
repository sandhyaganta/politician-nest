import { Controller,Get,Post,Body,Param,Put,Delete,UploadedFile,UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { user } from './schema/user.schema';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('user')
export class UserController {
    constructor(private readonly userservice:UserService){}

    @Post('upload')
    @UseInterceptors(FileInterceptor('photo'))
    async uploadFile(@UploadedFile() file,@Body()fields){
        console.log(file);
        const data = {
            
            photo:file.originalname,
            fristname:fields.fristname,
            lastname:fields.lastname,
            username:fields.username,
            password:fields.password,
            fathername:fields.fathername,
            phonenumber:fields.phonenumber,
            gender:fields.gender,
            village:fields.village,
            mandal:fields.mandal,
            district:fields.district,

        }

        try {
            const images = await this.userservice.create(data);
            return {success: true, images}
          } catch (err) {
            throw new HttpException({ err:'failed to create user'},HttpStatus.INTERNAL_SERVER_ERROR)
          }
    }

    // @Post('login')
    // async findOne(@Body('id') id: string, @Body() bookDto: BookDto): Promise<Book> {
    //     return this.booksService.update(id, bookDto);
   

    


    

   
    
}
