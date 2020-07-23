import {Controller, Post, Get} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

@Controller('users')
@ApiUseTags('users')
export class UsersController {

    @Post('newUser')
    @ApiOperation({title: 'Create new user'})
    async newUser() {
        return undefined
    }
    @Get('user')
    @ApiOperation({title: 'Get user'})
    async getUser() {
        return undefined
    }
    @Post('updateUserData')
    @ApiOperation({title: 'Update user data'})
    async updateUserData() {
        return undefined
    }
    @Post('deleteUser')
    @ApiOperation({title: 'Delete user'})
    async deleteUser() {
        return undefined
    }
    







}
