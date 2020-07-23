import {Controller, Get, Post} from "@nestjs/common";
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {appendSuffixesIfMatch} from "ts-loader/dist/utils";

@Controller('posts')
@ApiUseTags('posts')
export class PostsController {

    @Post('newPost')
    @ApiOperation({title: 'Create new post'})
    async newPost() {
        return undefined
    }
    @Post('editPost')
    @ApiOperation({title: 'Edit post'})
    async editPost() {
        return undefined
    }
    @Post('deletePost')
    @ApiOperation({title: 'Delete post'})
    async deletePost() {
        return undefined
    }
    @Get('post')
    @ApiOperation({title: 'Get post'})
    async getPost() {
        return undefined
    }
    @Post('addComment')
    @ApiOperation({title: 'Add comment'})
    async addComment() {
        return undefined
    }
    @Post('deleteComment')
    @ApiOperation({title: 'Delete comment'})
    async deleteComment() {
        return undefined
    }
    @Post('editComment')
    @ApiOperation({title: 'Edit comment'})
    async editComment() {
        return  undefined
    }
    @Post('like')
    @ApiOperation({title: 'Like post'})
    async likePost() {
        return undefined
    }
    @Get('getLikeList')
    @ApiOperation({title: 'Get like list'})
    async getLikeList() {
        return undefined
    }
}