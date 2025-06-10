import { Body, Controller, Delete, Get, HttpStatus, Param, Post, UseGuards } from "@nestjs/common";

import { AuthGuard } from "src/auth/auth.guard";
import { TeamCreateDTO } from "./dto/teamcreate.dto";
import { TeamService } from "./team.service";
import { FindTeamParam } from "./param/findteam.param";

@Controller('team')
export class TeamController {

    constructor(
        private teamService: TeamService
    ) { }

    @Post()
    @UseGuards(AuthGuard)
    async create(@Body() body: TeamCreateDTO) {
        return {
            statusCode: HttpStatus.OK,
            data: await this.teamService.save(body)
        }
    }

    @Get()
    async all() {
        return {
            statusCode: HttpStatus.OK,
            data: await this.teamService.find()
        }
    }

    @Get('/:id')
    async find(@Param('id') { id }: FindTeamParam) {

        const team = await this.teamService.findById(id);

        if (!team) {
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: "Не известный член команды"
            }
        }

        return {
            statusCode: HttpStatus.OK,
            data: team
        }

    }

    @Delete('/:id')
    async delete(@Param('id') { id }: FindTeamParam) {

        const team = await this.teamService.findById(id);

        if (!team) {
            return {
                statusCode: HttpStatus.NOT_FOUND,
                message: "Не известный член команды"
            }
        }

        await this.teamService.delete(team);

        return {
            statusCode: HttpStatus.OK,
        }

    }

}