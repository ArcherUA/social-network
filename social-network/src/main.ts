import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GATEWAY_PORT } from './config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      allowedHeaders: [
        'Origin',
        'Access-Control-Request-Method',
        'Access-Control-Allow-Origin',
        'Accept',
        'Cache-Control',
        'Content-Type',
        'Access-Control-Allow-Credentials',
        'Authorization',
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      credentials: true,
    },
  });

  app.setGlobalPrefix('/api/v1');
  await app.listen(parseInt(GATEWAY_PORT, 10));
}

bootstrap();
