import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from '@nestjs/microservices';

import {PostsCommand} from '../../../common/enums/posts.command.enums'
import {
  CreatePostDto,
  EditPostDto,
  CommentDto,
  EditCommentDto
} from '../dto/index';

@Injectable()
export class PostsService {

  public constructor(
    @Inject('POSTS_SERVICE') private readonly rmqClient: ClientProxy) {

  }

  async newPost(data: CreatePostDto) {
    const pattern = {cmd: PostsCommand.NEW_POST};

    return this.rmqClient
      .send(pattern, data)
  }

  async editPost(data: EditPostDto) {
    const pattern = {cmd: PostsCommand.EDIT_POST};

    return this.rmqClient
      .send(pattern, data)
  }

  async deletePost(id: string) {
    const pattern = {cmd: PostsCommand.DELETE_POST};

    return this.rmqClient
      .send(pattern, id)
  }

  async getPost(id: string) {
    const pattern = {cmd: PostsCommand.GET_POST};
    return this.rmqClient
      .send(pattern, id)
  }

  async addComment(data: CommentDto) {
    const pattern = {cmd: PostsCommand.ADD_COMMENT};

    return this.rmqClient
      .send(pattern, data);
  }

  async deleteComment(id: string) {
    const pattern = {cmd: PostsCommand.DELETE_COMMENT};

    return this.rmqClient
      .send(pattern, id);
  }

  async editComment(data: EditCommentDto) {
    const pattern = {cmd: PostsCommand.EDIT_COMMENT};

    return this.rmqClient
      .send(pattern, data);
  }

  async likeComment(id: string) {
    const pattern = {cmd: PostsCommand.LIKE_COMMENT};

    return this.rmqClient
      .send(pattern, id);
  }

  async likePost(postId: string, userId: string) {
    const pattern = {cmd: PostsCommand.LIKE_POST};
    return this.rmqClient
      .send(pattern, {postId, userId});
  }

  async getLikeListPost(id: string) {
    const pattern = {cmd: PostsCommand.GET_LIKE_LIST_POST};

    return this.rmqClient
      .send(pattern, id);
  }

  async getLikeListComment(id: string) {
    const pattern = {cmd: PostsCommand.GET_LIKE_LIST_COMMENT};

    return this.rmqClient
      .send(pattern, id);
  }
}