import { UserService } from 'src/users/user.service';
import { AuthRequest } from 'src/types';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './dto/login.dto';
export declare class AuthController {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    profile(req: AuthRequest): Promise<{
        statusCode: number;
        data: {
            password: undefined;
            id?: number | undefined;
            login?: string | undefined;
        };
    }>;
    login({ login, password }: LoginDTO): Promise<{
        statusCode: number;
        message: string;
        data?: undefined;
    } | {
        statusCode: number;
        data: {
            token: string;
            user: import("../users/models/user.entity").User;
        };
        message?: undefined;
    }>;
}
