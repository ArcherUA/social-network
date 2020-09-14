import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { MESSAGES_DB_CONFIG } from './config/orm.config';
import {
  RABBITMQ_PASSWORD,
  RABBITMQ_USERNAME,
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT,
} from './config';
import { Message } from './common/entities/message.entity';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...MESSAGES_DB_CONFIG, entities: [Message] }),
    TypeOrmModule.forFeature([Message]),

    ClientsModule.register([
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
  controllers: [MessagesController],
  providers: [MessagesService],
  exports: [MessagesService],
})
export class AppModule {}
