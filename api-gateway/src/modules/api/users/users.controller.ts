import {
  Controller,
  Post,
  Get,
  Delete,
  Req,
  Param,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { ClientProxy } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';

import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
@ApiUseTags('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy,
  ) {}

  @Post('new-user')
  @ApiOperation({ title: 'Create new user' })
  register(@Req() request: Request) {
    const user = request.body;
    return this.usersService.register(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user/:id')
  @ApiOperation({ title: 'Get user' })
  async getUser(@Param('id') id: string) {
    return this.usersService.getUser(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('update-user-data')
  @ApiOperation({ title: 'Update user data' })
  async updateUserData(@Req() request: Request) {
    const user = request.body;
    return this.usersService.updateUserData(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete-user')
  @ApiOperation({ title: 'Delete user' })
  async deleteUser(@Req() request: Request) {
    const id = request.body.id;
    return this.usersService.deleteUser(id);
  }

  @Post('login')
  @ApiOperation({ title: 'Authentication user' })
  async login(@Req() request: Request) {
    const email = request.body.email;
    const password = request.body.password;

    return this.usersService.loginUser(email, password);
  }
}
