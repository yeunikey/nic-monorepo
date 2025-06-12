"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewModule = void 0;
const common_1 = require("@nestjs/common");
const new_entity_1 = require("./new.entity");
const new_controller_1 = require("./new.controller");
const new_service_1 = require("./new.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("../../users/user.module");
let NewModule = class NewModule {
};
exports.NewModule = NewModule;
exports.NewModule = NewModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([new_entity_1.New]), user_module_1.UserModule],
        providers: [new_service_1.NewService],
        controllers: [new_controller_1.NewController],
    })
], NewModule);
//# sourceMappingURL=new.module.js.map