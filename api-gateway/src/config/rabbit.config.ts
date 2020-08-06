import {
  RABBITMQ_USERNAME,
  RABBITMQ_PASSWORD,
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT,
} from './';
import { ClientProviderOptions, MicroserviceOptions, Transport } from "@nestjs/microservices";
import { NestApplicationContextOptions } from "@nestjs/common/interfaces/nest-application-context-options.interface";

export const RMQ_CONFIG_USER_SERVICE = {
  transport: Transport.RMQ,
  options: {
    noAck: false,
    urls: [`amqp://${RABBITMQ_USERNAME}:${RABBITMQ_PASSWORD}@${RMQ_DISTRIBUTOR_HOST}:${RMQ_DISTRIBUTOR_PORT}`],
    queue: 'users_queue',
    queueOptions: {
      durable: true
    },
  },
} as NestApplicationContextOptions as MicroserviceOptions as ClientProviderOptions;


