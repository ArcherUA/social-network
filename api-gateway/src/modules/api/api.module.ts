import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { MessagesController, MessagesService } from './messages';
import { PostsController, PostsService } from './posts';
import { UsersController, UsersService } from './users';
import {
  RABBITMQ_USERNAME,
  RABBITMQ_PASSWORD,
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT,
} from '../../config';
import { MessageGateway } from './socket-gateway/socket.gateway';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${RABBITMQ_USERNAME}:${RABBITMQ_PASSWORD}@${RMQ_DISTRIBUTOR_HOST}:${RMQ_DISTRIBUTOR_PORT}`,
          ],
          queue: 'users_queue',
          queueOptions: {
            durable: true,
            noAck: true,
          },
        },
      },
      {
        name: 'POSTS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${RABBITMQ_USERNAME}:${RABBITMQ_PASSWORD}@${RMQ_DISTRIBUTOR_HOST}:${RMQ_DISTRIBUTOR_PORT}`,
          ],
          queue: 'posts_queue',
          queueOptions: {
            durable: true,
            noAck: true,
          },
        },
      },
      {
        name: 'MESSAGES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${RABBITMQ_USERNAME}:${RABBITMQ_PASSWORD}@${RMQ_DISTRIBUTOR_HOST}:${RMQ_DISTRIBUTOR_PORT}`,
          ],
          queue: 'messages_queue',
          queueOptions: {
            durable: true,
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
    MessagesController,
  ],
  providers: [MessagesService, PostsService, UsersService, MessageGateway],
  exports: [UsersService, PostsService, MessagesService, MessageGateway],
})
export class ApiModule {}
