import {Controller, Inject, Injectable} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';
import {ClientProxy, MessagePattern, Payload} from '@nestjs/microservices';

import {PostsCommand} from './common/enums/posts.command.enums'

import {PostsService} from "./posts.service";

@Injectable()
@Controller()
@ApiUseTags('users')
export class PostsController {

  constructor(
    private readonly postsService: PostsService,
    @Inject('POSTS_SERVICE') private readonly rmqClient: ClientProxy,
  ) {
  }

  @MessagePattern({cmd: PostsCommand.NEW_POST})
  async newPost(@Payload() data) {
    return this.postsService.newPost(data)
  };

  @MessagePattern({cmd: PostsCommand.EDIT_POST})
  async editPost(@Payload() data) {
    return this.postsService.editPost(data)
  };

  @MessagePattern({cmd: PostsCommand.DELETE_POST})
  async deletePost(@Payload() id: number) {
    return this.postsService.deletePost(id)
  };

  @MessagePattern({cmd: PostsCommand.GET_POST})
  async getPost(@Payload() id: number) {
    return this.postsService.getPost(id)
  };

  @MessagePattern({cmd: PostsCommand.GET_POSTS})
  async getPosts() {
    return this.postsService.getPosts()
  }

  @MessagePattern({cmd: PostsCommand.ADD_COMMENT})
  async addComment(@Payload() data) {
    return this.postsService.addComment(data)
  }

  @MessagePattern({cmd: PostsCommand.DELETE_COMMENT})
  async deleteComment(@Payload() id: number) {
    return this.postsService.deleteComment(id)
  }

  // ADD EDIT_COMMENT_DTO
  @MessagePattern({cmd: PostsCommand.EDIT_COMMENT})
  async editComment(@Payload() {data, id}) {
    return this.postsService.editComment(data, id)
  }

  @MessagePattern({cmd: PostsCommand.LIKE_POST})
  async likePost(@Payload() {postId, userId}) {
    return this.postsService.likePost(postId, userId)
  }

  @MessagePattern({cmd: PostsCommand.LIKE_COMMENT})
  async likeComment(@Payload() {commentId, userId}) {
    return this.postsService.likeComment(commentId, userId)
  }

  @MessagePattern({cmd: PostsCommand.GET_LIKE_LIST_COMMENT})
  async getLikeListComment(@Payload() id: number) {
    return this.postsService.getLikeListComment(id)
  }

  @MessagePattern({cmd: PostsCommand.GET_LIKE_LIST_POST})
  async getLikeListPost(@Payload() id: number) {
    return this.postsService.getLikeListPost(id)
  }
}
