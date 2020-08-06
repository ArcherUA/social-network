import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

import {ApiModule} from './modules/api/api.module';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {RABBITMQ_PASSWORD, RABBITMQ_USERNAME, RMQ_DISTRIBUTOR_HOST, RMQ_DISTRIBUTOR_PORT} from "./config";

@Module({
  imports: [
    ApiModule,

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
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
