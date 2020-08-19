import * as Joi from 'joi';

export const envSchema: Joi.ObjectSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(['development', 'production', 'local', 'debug'])
    .required(),

  API_GATEWAY_PORT: Joi.number().default(3001),
  API_HOST: Joi.string().default('api'),

  WEBSOCKET_PORT: Joi.number().default(3002),

  RMQ_DISTRIBUTOR_HOST: Joi.string().default('rabbitmq_server'),
  RMQ_DISTRIBUTOR_PORT: Joi.number().default(5672),
  MEDIA_STORAGE_PATH: Joi.string(),

  POSTS_DB_HOST: Joi.string().default('posts_db'),
  POSTS_DB_PORT: Joi.number().default(39756),
  POSTS_DB_NAME: Joi.string().default('posts_db'),
  POSTS_DB_USER: Joi.string().default('root'),
  POSTS_DB_PASSWORD: Joi.string().default('root'),

  RABBITMQ_USERNAME: Joi.string().default('astra_user'),
  RABBITMQ_PASSWORD: Joi.string().default('astra_password'),

  JWT_SECRET: Joi.string(),
  EXPIRES_IN: Joi.string()
});

