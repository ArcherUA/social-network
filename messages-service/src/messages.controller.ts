import { Controller, Injectable } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { MessagesCommand } from './common/enums/messages.command.enum';

import { MessagesService } from './messages.service';

@Injectable()
@Controller()
@ApiUseTags('messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService, // @Inject('MESSAGES_SERVICE') private readonly rmqClient: ClientProxy,
  ) {}

  @MessagePattern({ cmd: MessagesCommand.SAVE_MESSAGE_TO_DB })
  async saveMessageToDb(@Payload() message) {
    return this.messagesService.saveMessageToDb(message);
  }

  @MessagePattern({ cmd: MessagesCommand.SEND_DATA })
  async findUserFromMessage(@Payload() message) {
    return this.messagesService.findUserFromMessage(message);
  }
}
