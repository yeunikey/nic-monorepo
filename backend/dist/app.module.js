"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const article_1 = require("./article/models/article");
const article_module_1 = require("./article/article.module");
const auth_module_1 = require("./auth/auth.module");
const image_entity_1 = require("./image/entities/image.entity");
const image_module_1 = require("./image/image.module");
const common_1 = require("@nestjs/common");
const new_entity_1 = require("./new/models/new.entity");
const new_module_1 = require("./new/new.module");
const team_entity_1 = require("./team/models/team.entity");
const team_module_1 = require("./team/team.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/models/user.entity");
const user_module_1 = require("./users/user.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            image_module_1.ImageModule,
            team_module_1.TeamModule,
            article_module_1.ArticleModule,
            new_module_1.NewModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'flood_info',
                entities: [
                    user_entity_1.User,
                    image_entity_1.Image,
                    team_entity_1.Team,
                    article_1.Article,
                    new_entity_1.New
                ],
                synchronize: true,
                logging: true,
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map