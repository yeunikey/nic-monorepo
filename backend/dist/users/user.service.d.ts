import { DeepPartial, Repository } from "typeorm";
import { User } from "./models/user.entity";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findById(id: number): Promise<User | null>;
    findByLogin(login: string): Promise<User | null>;
    save(user: DeepPartial<User>): Promise<DeepPartial<User> & User>;
    delete(user: User): Promise<User>;
}
