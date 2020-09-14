import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessagesCommand } from '../../../common/enums/messages.command.enum';

@Injectable()
export class MessagesService {
  public constructor(
    @Inject('MESSAGES_SERVICE') private readonly rmqClient: ClientProxy,
  ) {}

  async saveMessageToDb(message) {
    return this.rmqClient.send(
      { cmd: MessagesCommand.SAVE_MESSAGE_TO_DB },
      message,
    );
  }

  async findUserFromMessage(message) {
    return this.rmqClient.send({ cmd: MessagesCommand.SEND_DATA }, message);
  }
}
