import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import {
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT,
  RABBITMQ_PASSWORD,
  RABBITMQ_USERNAME,
} from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);

  app.connectMicroservice({
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
  });
  await app.startAllMicroservicesAsync();
}

bootstrap();
