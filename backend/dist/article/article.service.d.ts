import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './models/article';
export declare class ArticleService {
    private readonly repo;
    constructor(repo: Repository<Article>);
    create(dto: CreateArticleDto): Promise<Article>;
    findAll(): Promise<Article[]>;
    remove(id: number): Promise<void>;
}
