import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from '@nestjs/microservices';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from 'typeorm';

import {
  CreatePostDto,
  EditPostDto,
  CommentDto,
  EditCommentDto
} from '../src/dto/index';
import {Post} from "./common/entities/post.entity";

@Injectable()
export class PostsService {

  private readonly UNKNOWN_ERROR = 'Unknown error'
  public constructor(
    @InjectRepository(Post)
    protected readonly postRepository: Repository<Post>,
    @Inject('POSTS_SERVICE') private readonly rmqClient: ClientProxy) {

  }

  async newPost(data: CreatePostDto) {
    const post = new Post(data)
    return await this.postRepository.save(post)
  }

  async editPost(data: EditPostDto) { // ADD COLUMN 'ID' IN EDIT_POST_DTO
    const post = await this.postRepository.findOne(data.id)
    if (post) {
      const updatePost = {...data}
      return await this.postRepository.update(data.id,updatePost)
    }
    return this.UNKNOWN_ERROR
  }

  async deletePost(id: string) {
    return await this.postRepository.delete(id)
  }

  async getPost(id: string) {
    return await this.postRepository.findOne(id)
  }

  async addComment(data: CommentDto) {
    return null //CREATE
  }

  async deleteComment(id: string) {
    return null //CREATE
  }

  async editComment(data: EditCommentDto) {
    return null //CREATE
  }

  async likeComment(data) {
    return null //CREATE
  }

  async likePost(id: string, userId: string) {
    const likedPost = await this.postRepository.findOne(id)
    if (likedPost) {
      if () {

      }
      const addLike = +likedPost.likes + 1
      console.log(addLike)
      return await this.postRepository.update(id, {likes: addLike})
    }
  }

  async getLikeListPost(id: string) {
    const post = await this.postRepository.findOne(id)
    return post.likes
  }

  async getLikeListComment(id: string) {
    return null
  }
}