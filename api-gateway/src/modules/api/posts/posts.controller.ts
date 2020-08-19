import {
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Req,
  Param,
  Inject,
  UseGuards
} from "@nestjs/common";
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {Request, Response} from 'express';

import {PostsService} from './posts.service';
import {
  CreatePostDto,
  EditPostDto,
  CommentDto,
  EditCommentDto
} from '../dto/index';

@Controller('posts')
@ApiUseTags('posts')
export class PostsController {

  constructor(private readonly postsService: PostsService) {
  }

  @Post('create')
  @ApiOperation({title: 'Create new post'})
  async newPost(@Req() request: Request) {
    const data = request.body
    return await this.postsService.newPost(data);
  }

  @Post('edit')
  @ApiOperation({title: 'Edit post'})
  async editPost(@Req() request: Request) {
    const data = request.body
    return await this.postsService.editPost(data);
  }

  @Delete('delete/:id')
  @ApiOperation({title: 'Delete post'})
  async deletePost(@Param('id') id: string) {
    return await this.postsService.deletePost(id);
  }

  @Get('post/:id')
  @ApiOperation({title: 'Get post'})
  async getPost(@Param('id') id: string) {
    return await this.postsService.getPost(id);
  }

  @Post('add-comment')
  @ApiOperation({title: 'Add comment'})
  async addComment(@Req() request: Request) {
    const data = request.body
    return await this.postsService.addComment(data);
  }

  @Delete('delete-comment')
  @ApiOperation({title: 'Delete comment'})
  async deleteComment(@Req() request: Request) {
    const id = request.body.data.id
    return await this.postsService.deleteComment(id);
  }

  @Post('edit-comment')
  @ApiOperation({title: 'Edit comment'})
  async editComment(@Req() request: Request) {
    const data = request.body
    return await this.postsService.editComment(data);
  }

  @Put('like/:id')
  @ApiOperation({title: 'Like post'})
  async likePost(
    @Param('id') id: string,
    @Req() request: Request) {
    const userId = request.body.userId
    return await this.postsService.likePost(id, userId);
  }

  @Get('get-like-list-comment')
  @ApiOperation({title: 'Get like list comment'})
  async getLikeListComment(@Req() request: Request) {
    const id = request.body.data.id
    return await this.postsService.getLikeListComment(id);
  }

  @Get('get-like-list-comment')
  @ApiOperation({title: 'Get like list post'})
  async getLikeListPost(@Req() request: Request) {
    const id = request.body.data.id
    return await this.postsService.getLikeListPost(id);
  }
}