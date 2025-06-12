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
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const team_entity_1 = require("./models/team.entity");
const typeorm_2 = require("@nestjs/typeorm");
let TeamService = class TeamService {
    teamRepo;
    constructor(teamRepo) {
        this.teamRepo = teamRepo;
    }
    async find() {
        return await this.teamRepo.find({
            order: {
                priority: 'asc'
            }
        });
    }
    async findById(id) {
        return await this.teamRepo.findOneBy({
            id: id
        });
    }
    async save(team) {
        return await this.teamRepo.save(team);
    }
    async delete(id) {
        return await this.teamRepo.delete(id);
    }
    async reorder(updates) {
        const promises = updates.map(({ id, priority }) => this.teamRepo.update({ id }, { priority }));
        await Promise.all(promises);
    }
};
exports.TeamService = TeamService;
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(team_entity_1.Team)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TeamService);
//# sourceMappingURL=team.service.js.map