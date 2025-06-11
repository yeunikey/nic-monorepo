import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
export declare class ArticleController {
    private readonly service;
    constructor(service: ArticleService);
    findAll(): Promise<import("./models/article").Article[]>;
    create(dto: CreateArticleDto): Promise<import("./models/article").Article>;
    remove(id: string): Promise<void>;
}
