import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ClientsModule, Transport} from "@nestjs/microservices";

import {UsersController} from "./users.controller";
import {UsersService} from "./users.services";
import {USERS_DB_CONFIG} from "./config/orm.config";
import {
  RABBITMQ_PASSWORD,
  RABBITMQ_USERNAME,
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT
} from './config/index';

@Module({
  imports: [
    TypeOrmModule.forRoot(USERS_DB_CONFIG),
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
  providers: [UsersService],
})
export class AppModule {
}
