import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices'
import { AppModule } from './app.module';
import { RMQ_DISTRIBUTOR_HOST, RMQ_DISTRIBUTOR_PORT } from  './config/index'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${RMQ_DISTRIBUTOR_HOST}:${RMQ_DISTRIBUTOR_PORT}`],
      queue: 'users_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

}
bootstrap();
