import {Module} from "@nestjs/common";
import {ClientsModule, Transport} from "@nestjs/microservices";

import {MessagesController,MessagesService} from './messages';
import {PostsController, PostsService} from './posts';
import {UsersController,UsersService} from './users';
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
            durable: false,
            noAck: true,
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'POSTS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://${RABBITMQ_USERNAME}:${RABBITMQ_PASSWORD}@${RMQ_DISTRIBUTOR_HOST}:${RMQ_DISTRIBUTOR_PORT}`],
          queue: 'users_queue',
          queueOptions: {
            durable: false,
            noAck: true,
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
  exports: [
    UsersService,
    PostsService,
    MessagesService,
  ]
})
export class ApiModule {
}
