import { Article } from './article/models/article';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { Image } from './image/entities/image.entity';
import { ImageModule } from './image/image.module';
import { Module } from '@nestjs/common';
import { New } from './new/models/new.entity';
import { NewModule } from './new/new.module';
import { Team } from './team/models/team.entity';
import { TeamModule } from './team/team.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/models/user.entity';
import { UserModule } from './users/user.module';

@Module({
  imports: [

    UserModule,
    AuthModule,
    ImageModule,
    TeamModule,
    ArticleModule,
    NewModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'flood_info',
      entities: [
        User,
        Image,
        Team,
        Article,
        New
      ],
      synchronize: true,
      logging: true,
    }),

    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'db-info',
    //   port: 5432,
    //   username: 'nic',
    //   password: 'Astana2024!bigdata',
    //   database: 'flood-info',
    //   entities: [
    //     User,
    //     Image,
    //     Team,
    //     Article,
    //     New
    //   ],
    //   synchronize: true,
    //   logging: true,
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
