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
  async newPost(@Req() data: CreatePostDto) {
    return await this.postsService.newPost(data);
  }

  @Post('edit')
  @ApiOperation({title: 'Edit post'})
  async editPost(@Req() data: EditPostDto) {
    return await this.postsService.editPost(data);
  }

  @Delete('delete')
  @ApiOperation({title: 'Delete post'})
  async deletePost(@Req() request: Request) {
    const id = request.body.data.id
    return await this.postsService.deletePost(id);
  }

  @Get('post')
  @ApiOperation({title: 'Get post'})
  async getPost(@Req() request: Request) {
    const id = request.body.data.id
    return await this.postsService.getPost(id);
  }

  @Post('add-comment')
  @ApiOperation({title: 'Add comment'})
  async addComment(@Req() data: CommentDto) {
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
  async editComment(@Req() data: EditCommentDto) {
    return await this.postsService.editComment(data);
  }

  @Put('like/:id')
  @ApiOperation({title: 'Like post'})
  async likePost(@Req() request: Request) {
    const id = request.body.data.id
    return await this.postsService.likePost(id);
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