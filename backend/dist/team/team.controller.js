"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
const teamcreate_dto_1 = require("./dto/teamcreate.dto");
const team_service_1 = require("./team.service");
const findteam_param_1 = require("./param/findteam.param");
let TeamController = class TeamController {
    teamService;
    constructor(teamService) {
        this.teamService = teamService;
    }
    async create(body) {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.teamService.save(body)
        };
    }
    async all() {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.teamService.find()
        };
    }
    async find({ id }) {
        const team = await this.teamService.findById(id);
        if (!team) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: "Не известный член команды"
            };
        }
        return {
            statusCode: common_1.HttpStatus.OK,
            data: team
        };
    }
    async delete({ id }) {
        const team = await this.teamService.findById(id);
        if (!team) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: "Не известный член команды"
            };
        }
        await this.teamService.delete(team);
        return {
            statusCode: common_1.HttpStatus.OK,
        };
    }
};
exports.TeamController = TeamController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [teamcreate_dto_1.TeamCreateDTO]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "all", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findteam_param_1.FindTeamParam]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "find", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findteam_param_1.FindTeamParam]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "delete", null);
exports.TeamController = TeamController = __decorate([
    (0, common_1.Controller)('team'),
    __metadata("design:paramtypes", [team_service_1.TeamService])
], TeamController);
//# sourceMappingURL=team.controller.js.map