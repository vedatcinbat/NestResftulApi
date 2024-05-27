import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './controllers/app.controller';
import { HumanController } from './controllers/human.controller';
import { AppService } from './services/app.service';
import { HumanService } from './services/human.service';

// Database Configuration
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Entities/user.entity';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { SongService } from './services/song.service';
import { SongController } from './controllers/song.controller';
import { Song } from './Entities/song.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || "localhost",
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASENAME,
      autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Song]),
  ],
  controllers: [AppController, HumanController, UserController, SongController],
  providers: [AppService, HumanService, UserService, SongService],
})
export class AppModule {}
