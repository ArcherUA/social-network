import { Controller } from '@nestjs/common';

import {  ApiUseTags } from '@nestjs/swagger';
import { MessagePattern, RpcException, Payload } from '@nestjs/microservices';

import { UsersCommand } from './common/enums/users.command.enums';
import { UsersService } from "./users.services";

@Controller()
@ApiUseTags('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @MessagePattern({cmd: UsersCommand.REGISTER_NEW_USER})
    async register() {
        return await this.usersService.register();
    };

    @MessagePattern({cmd: UsersCommand.GET_USER})
    async getUser() {
        return await this.usersService.getUser();
    };

    @MessagePattern({cmd: UsersCommand.UPDATE_USER_DATA})
    async updateUserData() {
        return await this.usersService.updateUserData();
    };

    @MessagePattern({cmd: UsersCommand.DELETE_USER})
    async deleteUser() {
        return await this.usersService.deleteUser();
    };
}
