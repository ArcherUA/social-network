import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import { MessagesController, PostsController, UsersController } from  './controllers';
import { MessagesService, PostsService, UsersService } from './services';
import {
    RABBITMQ_USERNAME,
    RABBITMQ_PASSWORD,
    RMQ_DISTRIBUTOR_HOST,
    RMQ_DISTRIBUTOR_PORT
    } from "../../config";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${RABBITMQ_USERNAME}:${RABBITMQ_PASSWORD}@${RMQ_DISTRIBUTOR_HOST}:${RMQ_DISTRIBUTOR_PORT}`],
          queue: 'users_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
    controllers: [
        MessagesController,
        PostsController,
        UsersController,
    ],
    providers: [
        MessagesService,
        PostsService,
        UsersService,
    ],
})
export class ApiModule {}
