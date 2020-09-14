import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import {
  RABBITMQ_PASSWORD,
  RABBITMQ_USERNAME,
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT,
  JWT_SECRET,
  EXPIRES_IN,
} from './config';
import { ApiModule } from './modules/api/api.module';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ApiModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: {
        expiresIn: EXPIRES_IN,
      },
    }),

    ClientsModule.register([
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
    ]),
  ],
  controllers: [],
  providers: [JwtStrategy],
  exports: [ApiModule],
})
export class AppModule {}
