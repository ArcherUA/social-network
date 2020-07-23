import { Controller, Post, Get } from "@nestjs/common";
import { ApiOperation, ApiUseTags } from "@nestjs/swagger";

import { MessagesService } from "../services/messages.service";


@Controller('message')
@ApiUseTags('message')
export class MessagesController {

    constructor(private readonly MessagesService:MessagesService) {}

    @Post('sendMessage')
    @ApiOperation({title: 'Send message'})
    async sendMessage() {
        return this.MessagesService.sendMessage()
    }
}