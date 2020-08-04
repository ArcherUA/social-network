import { Controller, Post, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ClientProxy, Client, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { UsersCommand } from '../../../common/enums/users.command.enums'
import { UsersService } from '../services/users.service';
import {
    RMQ_DISTRIBUTOR_HOST,
    RMQ_DISTRIBUTOR_PORT,
    RABBITMQ_USERNAME,
    RABBITMQ_PASSWORD
} from "../../../config/index";

@Controller('users')
@ApiUseTags('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}

    @Client({
        transport: Transport.RMQ,
        options: {
            urls: [`amqp://${RABBITMQ_USERNAME}:${RABBITMQ_PASSWORD}@${RMQ_DISTRIBUTOR_HOST}:${RMQ_DISTRIBUTOR_PORT}`],
            queue: 'users_queue',
            queueOptions: {
                durable: false,
            }
        }})
    client: ClientProxy;

    async onApplicationBootstrap() {
        await this.client.connect();
    }
    accumulate(): Observable<number> {
        const pattern = { cmd: 'sum' };
        const payload = [1, 2, 3];
        return this.client.send<number>(pattern, payload);
    }

    // @Get('new-user')
    // @ApiOperation({title: 'Create new user'})
    // register():Observable<number> {
    //     const pattern = { cmd: UsersCommand.REGISTRATION_NEW_USER };
    //     const payload = [1, 2, 3];
    //     return this.client.send<number>(pattern, payload);
    // }
    @Get('new-user')
    @ApiOperation({title: 'Create new user'})
    async register() {
        return this.UsersService.register()
    }
    @Get('user')
    @ApiOperation({title: 'Get user'})
    async getUser() {
        return this.UsersService.getUser();
    }
    @Post('update-user-data')
    @ApiOperation({title: 'Update user data'})
    async updateUserData() {
        return this.UsersService.updateUserData();
    }
    @Post('delete-user')
    @ApiOperation({title: 'Delete user'})
    async deleteUser() {
        return this.UsersService.deleteUser();
    }








}
