import { IsString } from "@nestjs/class-validator"

export class LoginDTO {

    @IsString()
    login: string;

    @IsString()
    password: string;

}