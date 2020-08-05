import { Module } from '@nestjs/common';
import { UsersController } from "./users.controller";
import { UsersService } from "./users.services";
import { TypeOrmModule } from '@nestjs/typeorm'
import { USERS_DB_CONFIG } from "./config/orm.config";

@Module({
  imports: [TypeOrmModule.forRoot(USERS_DB_CONFIG)],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
