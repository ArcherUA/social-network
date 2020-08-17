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

@Module({
  imports: [
    TypeOrmModule.forRoot({...POSTS_DB_CONFIG, entities: []}),
    TypeOrmModule.forFeature([]),

    ClientsModule.register([
      {
        name: 'POSTS_SERVICE',
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
    ])
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
