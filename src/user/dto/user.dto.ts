export class UserDto{
    readonly photo:string;
    readonly fristname:string;
    readonly lastname:string;
    readonly username:string;
    readonly password:string;
    readonly fathername:string;
    readonly phonenumber:number;
    readonly gender:'male' | 'female' | 'other';
    readonly village:string;
    readonly mandal:string;
    readonly district:string;
    
}