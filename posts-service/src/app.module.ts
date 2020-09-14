import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

import {
  RABBITMQ_PASSWORD,
  RABBITMQ_USERNAME,
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT,
} from './config';
import { POSTS_DB_CONFIG } from './config/orm.config';
import { Post, Like, Comment, LikeComment } from './common/entities';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...POSTS_DB_CONFIG,
      entities: [Post, Like, LikeComment, Comment],
    }),
    TypeOrmModule.forFeature([Post, Like, LikeComment, Comment]),

    ClientsModule.register([
      {
        name: 'POSTS_SERVICE',
        transport: Transport.RMQ,
        options: {
          noAck: false,
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
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class AppModule {}
