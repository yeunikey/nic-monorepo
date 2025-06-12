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
exports.NewController = void 0;
const common_1 = require("@nestjs/common");
const new_service_1 = require("./new.service");
const create_dto_1 = require("./dto/create.dto");
const update_dto_1 = require("./dto/update.dto");
const auth_guard_1 = require("../../auth/auth.guard");
const user_service_1 = require("../../users/user.service");
let NewController = class NewController {
    service;
    userService;
    constructor(service, userService) {
        this.service = service;
        this.userService = userService;
    }
    async create(dto, { user: { id: user_id } }) {
        const user = await this.userService.findById(user_id);
        if (!user) {
            return {
                statusCode: common_1.HttpStatus.UNAUTHORIZED,
                message: "У вас нет прав"
            };
        }
        return this.service.create(dto);
    }
    async update(id, dto, { user: { id: user_id } }) {
        const user = await this.userService.findById(user_id);
        if (!user) {
            return {
                statusCode: common_1.HttpStatus.UNAUTHORIZED,
                message: "У вас нет прав"
            };
        }
        return this.service.update(+id, dto);
    }
    async findAll() {
        return this.service.findAll();
    }
    async remove(id, { user: { id: user_id } }) {
        const user = await this.userService.findById(user_id);
        if (!user) {
            return {
                statusCode: common_1.HttpStatus.UNAUTHORIZED,
                message: "У вас нет прав"
            };
        }
        return this.service.remove(+id);
    }
};
exports.NewController = NewController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateNewDto, Object]),
    __metadata("design:returntype", Promise)
], NewController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/:id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.UpdateNewDto, Object]),
    __metadata("design:returntype", Promise)
], NewController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NewController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NewController.prototype, "remove", null);
exports.NewController = NewController = __decorate([
    (0, common_1.Controller)('news'),
    __metadata("design:paramtypes", [new_service_1.NewService,
        user_service_1.UserService])
], NewController);
//# sourceMappingURL=new.controller.js.map