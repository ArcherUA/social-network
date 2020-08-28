import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from '@nestjs/microservices';

import {PostsCommand} from '../../../common/enums/posts.command.enums';

@Injectable()
export class PostsService {

  public constructor(
    @Inject('POSTS_SERVICE') private readonly rmqClient: ClientProxy) {

  }

  async newPost(data) {
    return this.rmqClient
      .send({cmd: PostsCommand.NEW_POST}, data);
  }

  async editPost(data,postId) {
    return this.rmqClient
      .send({cmd: PostsCommand.EDIT_POST}, {data,postId});
  }

  async deletePost(id: number) {
    return this.rmqClient
      .send({cmd: PostsCommand.DELETE_POST}, id);
  }

  async getPost(id: number) {
    return this.rmqClient
      .send({cmd: PostsCommand.GET_POST}, id);
  }

  async getPosts() {
    return this.rmqClient
      .send({cmd: PostsCommand.GET_POSTS}, {});
  }

  async addComment(data) {
    return this.rmqClient
      .send({cmd: PostsCommand.ADD_COMMENT}, data);
  }

  async deleteComment(id: number) {
    return this.rmqClient
      .send({cmd: PostsCommand.DELETE_COMMENT}, id);
  }

  async editComment(data, id: number) {
    return this.rmqClient
      .send({cmd: PostsCommand.EDIT_COMMENT}, {data, id});
  }

  async likeComment(commentId: number, userId: number) {
    return this.rmqClient
      .send({cmd: PostsCommand.LIKE_COMMENT}, {commentId, userId});
  }

  async likePost(postId: number, userId: number) {
    return this.rmqClient
      .send({cmd: PostsCommand.LIKE_POST}, {postId, userId});
  }

  async getLikeListPost(id: number) {
    return this.rmqClient
      .send({cmd: PostsCommand.GET_LIKE_LIST_POST}, id);
  }

  async getLikeListComment(id: number) {
    return this.rmqClient
      .send({cmd: PostsCommand.GET_LIKE_LIST_COMMENT}, id);
  }
}