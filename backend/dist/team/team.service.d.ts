import { DeepPartial, Repository } from "typeorm";
import { Team } from "./models/team.entity";
export declare class TeamService {
    private teamRepo;
    constructor(teamRepo: Repository<Team>);
    find(): Promise<Team[]>;
    findById(id: number): Promise<Team | null>;
    save(team: DeepPartial<Team>): Promise<DeepPartial<Team> & Team>;
    delete(team: Team): Promise<Team>;
}
