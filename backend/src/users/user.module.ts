import { ImageModule } from "src/image/image.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./models/user.entity";
import { UserService } from "./user.service";

@Module({
    providers: [
        UserService,
    ],

    imports: [
        TypeOrmModule.forFeature([User]),
        ImageModule,
    ],
    exports: [
        UserService
    ]
})
export class UserModule { }