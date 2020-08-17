import {NestFactory} from '@nestjs/core';
import {Transport} from "@nestjs/microservices";

import {AppModule} from './app.module';
import {
  API_GATEWAY_PORT,
  RABBITMQ_PASSWORD,
  RABBITMQ_USERNAME,
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT
} from './config/index'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(API_GATEWAY_PORT);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${RABBITMQ_USERNAME}:${RABBITMQ_PASSWORD}@${RMQ_DISTRIBUTOR_HOST}:${RMQ_DISTRIBUTOR_PORT}`],
      queue: 'users_queue',
      queueOptions: {
        durable: false,
        noAck: true,
      },
    },
  });
  await app.startAllMicroservicesAsync();
}


bootstrap();
