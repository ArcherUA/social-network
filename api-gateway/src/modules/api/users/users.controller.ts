import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Inject,
  UseGuards,
  Body,
} from '@nestjs/common';
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { ClientProxy } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';
import { EditUserDto, RegisterUserDto } from '../dto';
import { LoginDto } from '../dto/login.dto';

@Controller('users')
@ApiUseTags('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject('USERS_SERVICE') private readonly rmqClient: ClientProxy,
  ) {}

  @Post('new-user')
  @ApiOperation({ title: 'Create new user' })
  register(@Body() user: RegisterUserDto) {
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
  async updateUserData(@Body() user: EditUserDto) {
    return this.usersService.updateUserData(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete-user/:id')
  @ApiOperation({ title: 'Delete user' })
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }

  @Post('login')
  @ApiOperation({ title: 'Authentication user' })
  async login(@Body() userData: LoginDto) {
    return this.usersService.loginUser(userData);
  }
}
