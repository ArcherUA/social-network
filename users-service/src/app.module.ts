import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UsersController } from './users.controller';
import { UsersService } from './users.services';
import { USERS_DB_CONFIG } from './config/orm.config';
import {
  RABBITMQ_PASSWORD,
  RABBITMQ_USERNAME,
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT,
} from './config';
import { User } from './common/entities/users.entity';
import { Avatar } from './common/entities/avatar.entity';
import { TokenService } from './token/token.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...USERS_DB_CONFIG, entities: [User, Avatar] }),
    TypeOrmModule.forFeature([User, Avatar]),

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
        name: 'MESSAGES_SERVICE',
        transport: Transport.RMQ,
        options: {
          noAck: false,
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
      {
        name: 'USERS_SERVICE',
        transport: Transport.RMQ,
        options: {
          noAck: false,
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
  controllers: [UsersController],
  providers: [UsersService, TokenService],
  exports: [UsersService],
})
export class AppModule {}
