import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticleController {

    constructor(private readonly service: ArticleService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    create(@Body() dto: CreateArticleDto) {
        return this.service.create(dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }

}
