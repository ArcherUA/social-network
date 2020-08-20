import {Controller, Inject, Injectable} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';
import {ClientProxy, MessagePattern, Payload} from '@nestjs/microservices';

import {PostsCommand} from './common/enums/posts.command.enums'

import {
  CreatePostDto,
  EditPostDto,
  CommentDto,
  EditCommentDto
} from './dto';
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
  async newPost(@Payload() data: CreatePostDto) {
    return this.postsService.newPost(data)
  };

  @MessagePattern({cmd: PostsCommand.EDIT_POST})
  async editPost(@Payload() data: EditPostDto) {
    return this.postsService.editPost(data)
  };

  @MessagePattern({cmd: PostsCommand.DELETE_POST})
  async deletePost(@Payload() id: string) {
    return this.postsService.deletePost(id)
  };

  @MessagePattern({cmd: PostsCommand.GET_POST})
  async getPost(@Payload() id: string) {
    return this.postsService.getPost(id)
  };

  @MessagePattern({cmd: PostsCommand.ADD_COMMENT})
  async addComment(@Payload() data: CommentDto) {
    return this.postsService.addComment(data)
  }

  @MessagePattern({cmd: PostsCommand.DELETE_COMMENT})
  async deleteComment(@Payload() id: string) {
    return this.postsService.deleteComment(id)
  }

  @MessagePattern({cmd: PostsCommand.EDIT_COMMENT})
  async editComment(@Payload() data: EditCommentDto) {
    return this.postsService.editComment(data)
  }

  @MessagePattern({cmd: PostsCommand.LIKE_POST})
  async likePost(@Payload() {postId, userId}) {
    return this.postsService.likePost(postId, userId)
  }

  @MessagePattern({cmd: PostsCommand.GET_LIKE_LIST_COMMENT})
  async getLikeListComment(@Payload() id: string) {
    return this.postsService.getLikeListComment(id)
  }

  @MessagePattern({cmd: PostsCommand.GET_LIKE_LIST_POST})
  async getLikeListPost(@Payload() id: string) {
    return this.postsService.getLikeListPost(id)
  }
}
