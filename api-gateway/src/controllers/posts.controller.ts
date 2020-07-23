import { Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';

import { PostsService } from '../services/posts.service';

@Controller('posts')
@ApiUseTags('posts')
export class PostsController {
    constructor(private readonly PostsService: PostsService) {
    }
    @Post('newPost')
    @ApiOperation({title: 'Create new post'})
    async newPost() {
        return this.PostsService.newPost()
    }
    @Post('editPost')
    @ApiOperation({title: 'Edit post'})
    async editPost() {
        return this.PostsService.editPost()
    }
    @Post('deletePost')
    @ApiOperation({title: 'Delete post'})
    async deletePost() {
        return this.PostsService.deletePost()
    }
    @Get('post')
    @ApiOperation({title: 'Get post'})
    async getPost() {
        return this.PostsService.getPost()
    }
    @Post('addComment')
    @ApiOperation({title: 'Add comment'})
    async addComment() {
        return this.PostsService.addComment()
    }
    @Post('deleteComment')
    @ApiOperation({title: 'Delete comment'})
    async deleteComment() {
        return this.PostsService.deleteComment()
    }
    @Post('editComment')
    @ApiOperation({title: 'Edit comment'})
    async editComment() {
        return  this.PostsService.editComment()
    }
    @Post('like')
    @ApiOperation({title: 'Like post'})
    async likePost() {
        return this.PostsService.likePost()
    }
    @Get('getLikeList')
    @ApiOperation({title: 'Get like list'})
    async getLikeList() {
        return this.PostsService.getLikeList()
    }
}