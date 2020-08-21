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
import {AuthGuard} from "@nestjs/passport";

@Controller('posts')
@ApiUseTags('posts')
export class PostsController {

  constructor(private readonly postsService: PostsService) {
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  @ApiOperation({title: 'Create new post'})
  async newPost(@Req() request: Request) {
    const data = request.body
    return await this.postsService.newPost(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('edit')
  @ApiOperation({title: 'Edit post'})
  async editPost(@Req() request: Request) {
    const data = request.body
    return await this.postsService.editPost(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete/:id')
  @ApiOperation({title: 'Delete post'})
  async deletePost(@Param('id') id: string) {
    return await this.postsService.deletePost(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('post/:id')
  @ApiOperation({title: 'Get post'})
  async getPost(@Param('id') id: string) {
    return await this.postsService.getPost(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('add-comment')
  @ApiOperation({title: 'Add comment'})
  async addComment(@Req() request: Request) {
    const data = request.body
    return await this.postsService.addComment(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete-comment')
  @ApiOperation({title: 'Delete comment'})
  async deleteComment(@Req() request: Request) {
    const id = request.body.data.id
    return await this.postsService.deleteComment(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('edit-comment')
  @ApiOperation({title: 'Edit comment'})
  async editComment(@Req() request: Request) {
    const data = request.body
    return await this.postsService.editComment(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('like/:id')
  @ApiOperation({title: 'Like post'})
  async likePost(
    @Param('id') id: string,
    @Req() request: Request) {
    const userId = request.body.userId
    return await this.postsService.likePost(id, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get-like-list-comment/:id')
  @ApiOperation({title: 'Get like list comment'})
  async getLikeListComment(@Param('id') id: string) {
    return await this.postsService.getLikeListComment(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get-like-list-post/:id')
  @ApiOperation({title: 'Get like list post'})
  async getLikeListPost(@Param('id') id: string) {
    return await this.postsService.getLikeListPost(id);
  }
}