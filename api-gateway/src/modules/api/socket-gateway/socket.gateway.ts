import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';

import { Socket, Server } from 'socket.io';
import { Log } from '@uk/log';
import {
  WEBSOCKET_PORT,
  GATEWAY_WEBSOCKET_MESSAGING_ROOM,
} from '../../../config';

import { MessagesService } from '../messages';
import { Injectable } from '@nestjs/common';
import { SocketGatewayTrait } from '../../../common/traits/socket-gateway.trait';
import { MessageDto } from '../dto/message.dto';

const log = new Log(__filename);
const task_room_options = {
  transports: ['websocket'],
  namespace: GATEWAY_WEBSOCKET_MESSAGING_ROOM,
};

@Injectable()
@WebSocketGateway(+WEBSOCKET_PORT, task_room_options)
export class MessageGateway extends SocketGatewayTrait
  implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  private readonly START = 'Messaging Gateway started';

  constructor(private readonly messagesService: MessagesService) {
    super();
    // log.info(this.START, {
    //   port: +WEBSOCKET_PORT,
    //   ...task_room_options,
    // });
  }

  @SubscribeMessage('START_MESSAGING')
  async messageEvent(
    client: Socket,
    message: MessageDto,
  ): Promise<{ status: string; data: object; error: object | string | null }> {
    try {
      const users = await this.messagesService.findUserFromMessage(message);
      const saveMessage = await this.messagesService.saveMessageToDb(message);

      return this.success({
        users: await users.toPromise(),
        saveMessage: await saveMessage.toPromise(),
      });
    } catch (e) {
      return this.error(e);
    }
  }

  handleConnection(socket: Socket): void {
    console.log('MESSAGING STARTED');
  }

  async handleDisconnect({ id: socketId }: Socket): Promise<void> {
    console.log('USER DISCONNECT');
  }
}
