import { Inject, Injectable } from '@nestjs/common';
import { Message } from './common/entities/message.entity';
import { Repository } from 'typeorm/index';
import { ClientProxy } from '@nestjs/microservices';
import { MessagesCommand } from './common/enums/messages.command.enum';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MessagesService {
  public constructor(
    @InjectRepository(Message)
    protected readonly messageRepository: Repository<Message>,
    @Inject('USERS_SERVICE') private readonly userRmqClient: ClientProxy,
  ) {}

  async saveMessageToDb(message) {
    const saveMessage = new Message(message);

    return await this.messageRepository.save(saveMessage);
  }

  async findUserFromMessage(message) {
    const ids = {};

    ids[message.authorId] = message.authorId;
    ids[message.recipientId] = message.recipientId;

    return this.userRmqClient.send(
      { cmd: MessagesCommand.SEND_ARRAY_USER_ID },
      Object.values(ids),
    );
  }
}
