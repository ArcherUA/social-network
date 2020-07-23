import {Controller, Post, Get} from "@nestjs/common";
import {ApiOperation, ApiUseTags} from "@nestjs/swagger";


@Controller('message')
@ApiUseTags('message')
export class MessagesController {

    @Post('sendMessage')
    @ApiOperation({title: 'Send message'})
    async sendMessage() {
        return undefined
    }
}