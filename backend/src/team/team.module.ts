import { Module } from "@nestjs/common";
import { Team } from "./models/team.entity";
import { TeamController } from "./team.controller";
import { TeamService } from "./team.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    controllers: [
        TeamController
    ],
    imports: [
        TypeOrmModule.forFeature([Team])
    ],
    providers: [
        TeamService
    ]
})
export class TeamModule { }