import { Repository } from 'typeorm';
import { CreateNewDto } from './dto/create.dto';
import { New } from './new.entity';
import { UpdateNewDto } from './dto/update.dto';
export declare class NewService {
    private readonly repo;
    constructor(repo: Repository<New>);
    create(dto: CreateNewDto): Promise<New>;
    findAll(): Promise<New[]>;
    remove(id: number): Promise<void>;
    update(id: number, dto: UpdateNewDto): Promise<void>;
}
