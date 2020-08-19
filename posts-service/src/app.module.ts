import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ClientsModule, Transport} from "@nestjs/microservices";

import {
  RABBITMQ_PASSWORD,
  RABBITMQ_USERNAME,
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT
} from "./config/index";
import {POSTS_DB_CONFIG} from "./config/orm.config";
import {Post} from "./common/entities/post.entity";
import {PostsController} from "./posts.controller";
import {PostsService} from "./posts.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({...POSTS_DB_CONFIG, entities: [Post]}),
    TypeOrmModule.forFeature([Post]),

    ClientsModule.register([
      {
        name: 'POSTS_SERVICE',
        transport: Transport.RMQ,
        options: {
          noAck: false,
          urls: [`amqp://${RABBITMQ_USERNAME}:${RABBITMQ_PASSWORD}@${RMQ_DISTRIBUTOR_HOST}:${RMQ_DISTRIBUTOR_PORT}`],
          queue: 'posts_queue',
          queueOptions: {
            durable: true,
            noAck: true,
          },
        },
      },
    ])
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class AppModule {}
