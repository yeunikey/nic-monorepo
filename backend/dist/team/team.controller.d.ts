import { HttpStatus } from "@nestjs/common";
import { TeamCreateDTO } from "./dto/teamcreate.dto";
import { TeamService } from "./team.service";
import { FindTeamParam } from "./param/findteam.param";
export declare class TeamController {
    private teamService;
    constructor(teamService: TeamService);
    create(body: TeamCreateDTO): Promise<{
        statusCode: HttpStatus;
        data: import("typeorm").DeepPartial<import("./models/team.entity").Team> & import("./models/team.entity").Team;
    }>;
    all(): Promise<{
        statusCode: HttpStatus;
        data: import("./models/team.entity").Team[];
    }>;
    find({ id }: FindTeamParam): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: HttpStatus;
        data: import("./models/team.entity").Team;
        message?: undefined;
    }>;
    delete({ id }: FindTeamParam): Promise<{
        statusCode: HttpStatus;
        message: string;
    } | {
        statusCode: HttpStatus;
        message?: undefined;
    }>;
}
