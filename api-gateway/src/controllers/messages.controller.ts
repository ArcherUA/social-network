import { Controller, Post, Get } from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { MessagesService } from '../services/messages.service';
import { MessagingGateway } from '../socket-gateway/socket.gateway'
@Controller('message')
@ApiUseTags('message')
export class MessagesController {

    constructor(
        private readonly MessagesService:MessagesService,
        private readonly MessagingGateway:MessagingGateway,
        ) {}

    // @Post('sendMessage')
    // @ApiOperation({title: 'Send message'})
    // async sendMessage() {
    //     return this.MessagesService.sendMessage()
    // }
    @Post()
    @ApiOperation({title: 'Staring messaging'})
    async startingMessaging() {
        return this.MessagingGateway.startMessaging()
    }
}