import { Repository } from "typeorm";
import { User } from "./models/user.entity";
import { ImageService } from "src/image/image.service";
export declare class UserService {
    private userRepository;
    private imageService;
    constructor(userRepository: Repository<User>, imageService: ImageService);
    findById(id: number): Promise<User | null>;
    findByLogin(login: string): Promise<User | null>;
    save(user: User): Promise<User>;
    delete(user: User): Promise<User>;
}
