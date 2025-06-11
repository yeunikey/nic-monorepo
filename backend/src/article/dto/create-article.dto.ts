import { IsDateString, IsString } from "@nestjs/class-validator";

export class CreateArticleDto {

    @IsString()
    authorName: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    doi: string;

    @IsDateString()
    publishedAt: string;

}
