import {
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Req,
  Param,
  UseGuards,
  Body,
} from "@nestjs/common";
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {AuthGuard} from "@nestjs/passport";
import {Request} from 'express';

import {PostsService} from './posts.service';
import {CreatePostDto, EditPostDto} from "../dto";

@Controller('posts')
@ApiUseTags('posts')
export class PostsController {

  constructor(private readonly postsService: PostsService) {
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  @ApiOperation({title: 'Create new post'})
  async newPost(@Body() data: CreatePostDto) {
    return await this.postsService.newPost(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('edit')
  @ApiOperation({title: 'Edit post'})
  async editPost(@Body() data: EditPostDto) {
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
  @Get('get-posts')
  @ApiOperation({title: 'Get all post'})
  async getPosts() {
    return await this.postsService.getPosts()
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('add-comment')
  @ApiOperation({title: 'Add comment'})
  async addComment(@Req() request: Request) {
    const data = request.body
    return await this.postsService.addComment(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete-comment/:id')
  @ApiOperation({title: 'Delete comment'})
  async deleteComment(@Param('id') id: number) {
    return await this.postsService.deleteComment(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('edit-comment/:id')
  @ApiOperation({title: 'Edit comment'})
  async editComment(
    @Param('id') id: number,
    @Req() request: Request) {
    const data = request.body
    return await this.postsService.editComment(data, id);
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