import { Controller } from '@nestjs/common';

import {  ApiUseTags } from '@nestjs/swagger';
import { MessagePattern, RpcException, Payload } from '@nestjs/microservices';

import { UsersMessage } from './commmon/enums/users.message.enums'

@Controller()
@ApiUseTags('users')
export class UsersController {

    @MessagePattern({cmd: UsersMessage.REGISTRATION_NEW_USER})
    async register() {
        return null
    }
    @MessagePattern({cmd: UsersMessage.GET_USER})
    async getUser() {
        return null
    }
    @MessagePattern({cmd: UsersMessage.UPDATE_USER_DATA})
    async updateUserData() {
        return null
    }
    @MessagePattern({cmd: UsersMessage.DELETE_USER})
    async deleteUser() {
        return null
    }
}