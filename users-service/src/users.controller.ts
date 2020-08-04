import { Controller } from '@nestjs/common';

import {  ApiUseTags } from '@nestjs/swagger';
import { MessagePattern, RpcException, Payload } from '@nestjs/microservices';

import { UsersCommand } from './commmon/enums/users.command.enums'
import { UsersService } from "./users.services";

@Controller()
@ApiUseTags('users')
export class UsersController {

    constructor(private readonly UsersService: UsersService) {
    }

    @MessagePattern({cmd: UsersCommand.REGISTRATION_NEW_USER})
    async register() {
        return console.log('test')
        // await this.UsersService.register();
    }
    @MessagePattern({cmd: UsersCommand.GET_USER})
    async getUser() {
        return await this.UsersService.getUser();
    }
    @MessagePattern({cmd: UsersCommand.UPDATE_USER_DATA})
    async updateUserData() {
        return await this.UsersService.updateUserData();
    }
    @MessagePattern({cmd: UsersCommand.DELETE_USER})
    async deleteUser() {
        return await this.UsersService.deleteUser();
    }
}