import { Injectable } from "@nestjs/common";
import { DeepPartial, Repository } from "typeorm";
import { Team } from "./models/team.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TeamService {

    constructor(
        @InjectRepository(Team)
        private teamRepo: Repository<Team>
    ) { }

    async find() {
        return await this.teamRepo.find();
    }

    async findById(id: number) {
        return await this.teamRepo.findOneBy({
            id: id
        });
    }

    async save(team: DeepPartial<Team>) {
        return await this.teamRepo.save(team);
    }

    async delete(team: Team) {
        return await this.teamRepo.remove(team);
    }

}