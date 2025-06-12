import { HttpStatus } from "@nestjs/common";
import { TeamCreateDTO } from "./dto/teamcreate.dto";
import { TeamService } from "./team.service";
import { AuthRequest } from "src/types";
import { UserService } from "src/users/user.service";
export declare class TeamController {
    private teamService;
    private userService;
    constructor(teamService: TeamService, userService: UserService);
    reorder(updates: {
        id: number;
        priority: number;
    }[], { user: { id: user_id } }: AuthRequest): Promise<{
        statusCode: HttpStatus;
        message: string;
    } | {
        statusCode: HttpStatus;
        message?: undefined;
    }>;
    create(body: TeamCreateDTO): Promise<{
        statusCode: HttpStatus;
        data: import("typeorm").DeepPartial<import("./models/team.entity").Team> & import("./models/team.entity").Team;
    }>;
    all(): Promise<{
        statusCode: HttpStatus;
        data: import("./models/team.entity").Team[];
    }>;
    find(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data?: undefined;
    } | {
        statusCode: HttpStatus;
        data: import("./models/team.entity").Team;
        message?: undefined;
    }>;
    delete(id: number): Promise<{
        statusCode: HttpStatus;
    }>;
}
