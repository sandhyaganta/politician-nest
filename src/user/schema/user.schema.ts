import { Schema,Document } from "mongoose";

export const UserSchema=new Schema({
    photo:{
        type:String,
        require:true,
    },
    fristname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    fathername:{
        type:String,
        require:true,
    },
    phonenumber:{
        type:Number,
        require:true,
    },
    gender:{
        type:String,
        enum:['male','female'],
        require:true,
    },
    village:{
        type:String,
        require:true,
    },
    mandal:{
        type:String,
        require:true,
    },
    district:{
        type:String,
        require:true,
    }
},
{timestamps:true,

}
);
export interface user extends Document{
    photo:string,
    fristname:string,
    lastname:string,
    Username:string,
    password:string,
    fathername:string,
    phonenumber:string,
    gender:'male' |'female'|'others',
    village:string,
    mandal:string,
    district:string,


}