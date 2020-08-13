import {Controller, Post, Get, Inject, Body, Req, Param, Delete} from "@nestjs/common";
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

  @Get('user/:id')
  @ApiOperation({title: 'Get user'})
  async getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Post('update-user-data')
  @ApiOperation({title: 'Update user data'})
  async updateUserData(@Req() request: Request) {
    const user = request.body
    return this.usersService.updateUserData(user);
  }

  @Delete('delete-user')
  @ApiOperation({title: 'Delete user'})
  async deleteUser(@Req() request: Request) {
    const id = request.body.id
    return this.usersService.deleteUser(id);
  }


}
