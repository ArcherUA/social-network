import {Controller, Get, Post, Put} from "@nestjs/common";
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {Request, Response} from 'express';

import {PostsService} from '../services/posts.service';

@Controller('posts')
@ApiUseTags('posts')
export class PostsController {

  constructor(private readonly postsService: PostsService) {
  }

  @Post('new-post')
  @ApiOperation({title: 'Create new post'})
  async newPost() {
    return await this.postsService.newPost();
  }

  @Post('edit-post')
  @ApiOperation({title: 'Edit post'})
  async editPost() {
    return await this.postsService.editPost();
  }

  @Post('delete-post')
  @ApiOperation({title: 'Delete post'})
  async deletePost() {
    return await this.postsService.deletePost();
  }

  @Get('post')
  @ApiOperation({title: 'Get post'})
  async getPost() {
    return await this.postsService.getPost();
  }

  @Post('add-comment')
  @ApiOperation({title: 'Add comment'})
  async addComment() {
    return await this.postsService.addComment();
  }

  @Post('delete-comment')
  @ApiOperation({title: 'Delete comment'})
  async deleteComment() {
    return await this.postsService.deleteComment();
  }

  @Post('edit-comment')
  @ApiOperation({title: 'Edit comment'})
  async editComment() {
    return await this.postsService.editComment();
  }

  @Put('like/:id')
  @ApiOperation({title: 'Like post'})
  async likePost() {
    return await this.postsService.likePost();
  }

  @Get('get-like-list')
  @ApiOperation({title: 'Get like list'})
  async getLikeList() {
    return await this.postsService.getLikeList();
  }
}