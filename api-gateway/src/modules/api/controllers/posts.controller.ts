import { Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { Request, Response } from 'express';

import { PostsService } from '../services/posts.service';

@Controller('posts')
@ApiUseTags('posts')
export class PostsController {

    constructor(private readonly PostsService: PostsService) {}

    @Post('new-post')
    @ApiOperation({title: 'Create new post'})
    async newPost() {
        return await this.PostsService.newPost();
    }
    @Post('edit-post')
    @ApiOperation({title: 'Edit post'})
    async editPost() {
        return await this.PostsService.editPost();
    }
    @Post('delete-post')
    @ApiOperation({title: 'Delete post'})
    async deletePost() {
        return await this.PostsService.deletePost();
    }
    @Get('post')
    @ApiOperation({title: 'Get post'})
    async getPost() {
        return await this.PostsService.getPost();
    }
    @Post('add-comment')
    @ApiOperation({title: 'Add comment'})
    async addComment() {
        return await this.PostsService.addComment();
    }
    @Post('delete-comment')
    @ApiOperation({title: 'Delete comment'})
    async deleteComment() {
        return await this.PostsService.deleteComment();
    }
    @Post('edit-comment')
    @ApiOperation({title: 'Edit comment'})
    async editComment() {
        return  await this.PostsService.editComment();
    }
    @Post('like')
    @ApiOperation({title: 'Like post'})
    async likePost() {
        return await this.PostsService.likePost();
    }
    @Get('get-like-list')
    @ApiOperation({title: 'Get like list'})
    async getLikeList() {
        return await this.PostsService.getLikeList();
    }
}