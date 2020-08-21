import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from '@nestjs/microservices';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository, getRepository} from 'typeorm';

import {
  CreatePostDto,
  EditPostDto,
  CommentDto,
  EditCommentDto
} from '../src/dto/index';
import {Post, Like} from "./common/entities";

@Injectable()
export class PostsService {

  private readonly UNKNOWN_ERROR = 'Unknown error'

  public constructor(
    @InjectRepository(Post)
    protected readonly postRepository: Repository<Post>,
    @InjectRepository(Like)
    protected readonly likeRepository: Repository<Like>,
    @Inject('POSTS_SERVICE') private readonly rmqClient: ClientProxy) {

  }

  async newPost(data: CreatePostDto) {
    const post = new Post(data)
    return await this.postRepository.save(post)
  }

  async editPost(data: EditPostDto) {
    const post = await this.postRepository.findOne(data.id)
    if (post) {
      const updatePost = {...data}
      return await this.postRepository.update(data.id, updatePost)
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

  async likePost(postId: string, userId: string) {
    const likedPost = await this.postRepository.findOne(postId)
    // VERIFY USER
    if (likedPost) {
      const liked = await this.likeRepository.findOne({
        where: {
          postId: postId,
          userId: userId,
        }
      })
      if (liked) {
        return this.likeRepository.delete(liked.id)
      } else {
        const like = new Like({postId, userId})
        return this.likeRepository.save(like)
      }
    }
    return this.UNKNOWN_ERROR
  }

  async getLikeListPost(id: string) {
    const like = await getRepository(Like)
      .createQueryBuilder('like')
      .where('like.postId=:id', {id: id})
      .getCount()
    return like
  }

  async getLikeListComment(id: string) {
    return null
  }
}