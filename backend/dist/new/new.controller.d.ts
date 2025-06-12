import { HttpStatus } from '@nestjs/common';
import { NewService } from './new.service';
import { CreateNewDto } from './dto/create.dto';
import { UpdateNewDto } from './dto/update.dto';
import { AuthRequest } from 'src/types';
import { UserService } from 'src/users/user.service';
export declare class NewController {
    private readonly service;
    private userService;
    constructor(service: NewService, userService: UserService);
    create(dto: CreateNewDto, { user: { id: user_id } }: AuthRequest): Promise<import("./models/new.entity").New | {
        statusCode: HttpStatus;
        message: string;
    }>;
    update(id: string, dto: UpdateNewDto, { user: { id: user_id } }: AuthRequest): Promise<void | {
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(): Promise<{
        statusCode: number;
        data: import("./models/new.entity").New[];
    }>;
    findById(id: number): Promise<{
        statusCode: number;
        data: import("./models/new.entity").New | null;
    }>;
    remove(id: string, { user: { id: user_id } }: AuthRequest): Promise<{
        statusCode: HttpStatus;
        message: string;
    } | {
        statusCode: number;
        message?: undefined;
    }>;
}
