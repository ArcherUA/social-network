import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  // app.connectMicroservice({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [`amqp://${USER_DISTRIBUTOR_HOST}:${USER_DISTRIBUTOR_PORT}`],
  //     queue: 'users_queue',
  //     queueOptions: {
  //       durable: false,
  //     },
  //   },
  // });
}
bootstrap();
