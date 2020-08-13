import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {PassportModule} from '@nestjs/passport'
import {JwtModule} from '@nestjs/jwt'

import {UsersController} from "./users.controller";
import {UsersService} from "./users.services";
import {USERS_DB_CONFIG} from "./config/orm.config";
import {
  RABBITMQ_PASSWORD,
  RABBITMQ_USERNAME,
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT,
  JWT_SECRET,
  EXPIRES_IN
} from './config/index';
import {User} from "./common/entities/users.entity";
import {Avatar} from "./common/entities/avatar.entity";
import {TokenService} from "./token/token.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({...USERS_DB_CONFIG, entities: [User, Avatar]}),
    TypeOrmModule.forFeature([User, Avatar]),

    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: EXPIRES_IN
      }
    }),
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          noAck: false,
          urls: [`amqp://${RABBITMQ_USERNAME}:${RABBITMQ_PASSWORD}@${RMQ_DISTRIBUTOR_HOST}:${RMQ_DISTRIBUTOR_PORT}`],
          queue: 'users_queue',
          queueOptions: {
            durable: true,
            noAck: true,
          },
        },
      },
    ]),],
  controllers: [UsersController],
  providers: [UsersService, TokenService],
})
export class AppModule {
}
