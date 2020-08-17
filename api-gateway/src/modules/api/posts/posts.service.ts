import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from '@nestjs/microservices';

import {PostsCommand} from '../../../common/enums/posts.command.enums'

@Injectable()
export class PostsService {

  constructor(
    @Inject('POSTS_SERVICE') private readonly rmqClient: ClientProxy) {

  }

  async newPost(data) {
    const pattern = {cmd: PostsCommand.NEW_POST};

    return this.rmqClient
      .send(pattern, data)
  }

  async editPost(data) {
    const pattern = {cmd: PostsCommand.EDIT_POST};

    return this.rmqClient
      .send(pattern, data)
  }

  async deletePost() {
    const pattern = {cmd: PostsCommand.DELETE_POST};

    return this.rmqClient
      .send(pattern, data)
  }

  async getPost() {
    const pattern = {cmd: PostsCommand.GET_POST};

    return this.rmqClient
      .send(pattern, data)
  }

  async addComment() {
    const pattern = {cmd: PostsCommand.ADD_COMMENT};

    return this.rmqClient
      .send(pattern, data);
  }

  async deleteComment() {
    const pattern = {cmd: PostsCommand.DELETE_COMMENT};

    return this.rmqClient
      .send(pattern, data);
  }

  async editComment() {
    const pattern = {cmd: PostsCommand.EDIT_COMMENT};

    return this.rmqClient
      .send(pattern, data);
  }

  async likeComment() {
    const pattern = {cmd: PostsCommand.LIKE_COMMENT};

    return this.rmqClient
      .send(pattern, data);
  }

  async likePost() {
    const pattern = {cmd: PostsCommand.LIKE_POST};

    return this.rmqClient
      .send(pattern, data);
  }

  async getLikeListPost() {
    const pattern = {cmd: PostsCommand.GET_LIKE_LIST_POST};

    return this.rmqClient
      .send(pattern, data);
  }

  async getLikeListComment() {
    const pattern = {cmd: PostsCommand.GET_LIKE_LIST_COMMENT};

    return this.rmqClient
      .send(pattern, data);
  }
}