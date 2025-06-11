import { DeepPartial, Repository } from "typeorm";
import { User } from "./models/user.entity";
import { ImageService } from "src/image/image.service";
export declare class UserService {
    private userRepository;
    private imageService;
    constructor(userRepository: Repository<User>, imageService: ImageService);
    findById(id: number): Promise<User | null>;
    findByLogin(login: string): Promise<User | null>;
    save(user: DeepPartial<User>): Promise<DeepPartial<User> & User>;
    delete(user: User): Promise<User>;
}
