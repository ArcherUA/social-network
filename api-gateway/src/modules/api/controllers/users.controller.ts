import {Controller, Post, Get, Inject, Body, Req} from "@nestjs/common";
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {ClientProxy} from '@nestjs/microservices';

import {Request} from 'express';

import {UsersService} from '../services/users.service';

@Controller('users')
@ApiUseTags('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
    @Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy,
  ) {
  }

  @Post('new-user')
  @ApiOperation({title: 'Create new user'})
  register(@Req() request: Request) {
    const user = request.body;
    return this.usersService.register(user);
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
