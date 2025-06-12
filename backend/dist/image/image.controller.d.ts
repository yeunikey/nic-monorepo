import { StreamableFile, HttpStatus } from '@nestjs/common';
import { ImageService } from './image.service';
import { AuthRequest } from 'src/types';
import { UserService } from 'src/users/user.service';
export declare class ImageController {
    private readonly imageService;
    private userService;
    constructor(imageService: ImageService, userService: UserService);
    upload(file: Express.Multer.File, { user: { id: user_id } }: AuthRequest): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: number;
        data: import("./entities/image.entity").Image;
        message?: undefined;
    }>;
    getImage(id: string): Promise<StreamableFile>;
}
