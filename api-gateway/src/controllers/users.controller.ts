import { Controller, Post, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

import { UsersService } from '../services/users.service';

@Controller('users')
@ApiUseTags('users')
export class UsersController {

    constructor(private readonly UsersService: UsersService) {}

    @Post('newUser')
    @ApiOperation({title: 'Create new user'})
    async newUser() {
        return this.UsersService.newUser();
    }
    @Get('user')
    @ApiOperation({title: 'Get user'})
    async getUser() {
        return this.UsersService.getUser();
    }
    @Post('updateUserData')
    @ApiOperation({title: 'Update user data'})
    async updateUserData() {
        return this.UsersService.updateUserData();
    }
    @Post('deleteUser')
    @ApiOperation({title: 'Delete user'})
    async deleteUser() {
        return this.UsersService.deleteUser();
    }








}
