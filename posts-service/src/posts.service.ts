import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from '@nestjs/microservices';

import {
  CreatePostDto,
  EditPostDto,
  CommentDto,
  EditCommentDto
} from '../src/dto/index';

@Injectable()
export class PostsService {

  public constructor(
    @Inject('POSTS_SERVICE') private readonly rmqClient: ClientProxy) {

  }

  async newPost(data: CreatePostDto) {
    return null

  }

  async editPost(data) {
    return null

  }

  async deletePost(data) {
    return null

  }

  async getPost(data) {
    return null

  }

  async addComment(data) {
    return null

  }

  async deleteComment(data) {
    return null

  }

  async editComment(data) {
    return null

  }

  async likeComment(data) {
    return null

  }

  async likePost(data) {
    return null

  }

  async getLikeListPost(data) {
    return null

  }

  async getLikeListComment(data) {
    return null

  }
}