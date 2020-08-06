import {Controller, Post, Get, Inject} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiUseTags} from '@nestjs/swagger';
import {ClientProxy, Client, Transport} from '@nestjs/microservices';
import {Observable} from 'rxjs';

import {UsersCommand} from '../../../common/enums/users.command.enums'
import {UsersService} from '../services/users.service';
import {
  RMQ_DISTRIBUTOR_HOST,
  RMQ_DISTRIBUTOR_PORT,
  RABBITMQ_USERNAME,
  RABBITMQ_PASSWORD
} from "../../../config/index";

@Controller('users')
@ApiUseTags('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
    @Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy,
  ) {
  }

  @Get('new-user')
  @ApiOperation({title: 'Create new user'})
  register() {
    console.log('register')
    return this.usersService.register()
  }

  @Get('user')
  @ApiOperation({title: 'Get user'})
  async getUser() {
    return this.usersService.getUser();
  }

  @Post('update-user-data')
  @ApiOperation({title: 'Update user data'})
  async updateUserData() {
    return this.usersService.updateUserData();
  }

  @Post('delete-user')
  @ApiOperation({title: 'Delete user'})
  async deleteUser() {
    return this.usersService.deleteUser();
  }


}
