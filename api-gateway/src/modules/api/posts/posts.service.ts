import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from '@nestjs/microservices';

import {PostsCommand} from '../../../common/enums/posts.command.enums'

@Injectable()
export class PostsService {

  public constructor(
    @Inject('POSTS_SERVICE') private readonly rmqClient: ClientProxy) {

  }

  async newPost(data) {
    const pattern = {cmd: PostsCommand.NEW_POST};

    return this.rmqClient
      .send(pattern, data)
  }

  async editPost(data,postId) {
    const pattern = {cmd: PostsCommand.EDIT_POST};

    return this.rmqClient
      .send(pattern, {data,postId})
  }

  async deletePost(id: number) {
    const pattern = {cmd: PostsCommand.DELETE_POST};

    return this.rmqClient
      .send(pattern, id)
  }

  async getPost(id: number) {
    const pattern = {cmd: PostsCommand.GET_POST};
    return this.rmqClient
      .send(pattern, id)
  }

  async getPosts() {
    const pattern = {cmd: PostsCommand.GET_POSTS};
    return this.rmqClient
      .send(pattern, {})
  }

  async addComment(data) {
    const pattern = {cmd: PostsCommand.ADD_COMMENT};

    return this.rmqClient
      .send(pattern, data);
  }

  async deleteComment(id: number) {
    const pattern = {cmd: PostsCommand.DELETE_COMMENT};

    return this.rmqClient
      .send(pattern, id);
  }

  async editComment(data, id: number) {
    const pattern = {cmd: PostsCommand.EDIT_COMMENT};
    return this.rmqClient
      .send(pattern, {data, id});
  }

  async likeComment(commentId: number, userId: number) {
    const pattern = {cmd: PostsCommand.LIKE_COMMENT};

    return this.rmqClient
      .send(pattern, {commentId, userId});
  }

  async likePost(postId: number, userId: number) {
    const pattern = {cmd: PostsCommand.LIKE_POST};
    return this.rmqClient
      .send(pattern, {postId, userId});
  }

  async getLikeListPost(id: number) {
    const pattern = {cmd: PostsCommand.GET_LIKE_LIST_POST};

    return this.rmqClient
      .send(pattern, id);
  }

  async getLikeListComment(id: number) {
    const pattern = {cmd: PostsCommand.GET_LIKE_LIST_COMMENT};

    return this.rmqClient
      .send(pattern, id);
  }
}