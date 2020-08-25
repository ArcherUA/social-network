import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from '@nestjs/microservices';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository, getRepository} from 'typeorm';

import {Post, Like, Comment, LikeComment} from "./common/entities";

@Injectable()
export class PostsService {

  private readonly UNKNOWN_ERROR = 'Unknown error'

  public constructor(
    @InjectRepository(Post)
    protected readonly postRepository: Repository<Post>,
    @InjectRepository(Like)
    protected readonly likeRepository: Repository<Like>,
    @InjectRepository(Comment)
    protected readonly commentRepository: Repository<Comment>,
    @InjectRepository(LikeComment)
    protected readonly likeCommentRepository: Repository<LikeComment>,
    @Inject('POSTS_SERVICE') private readonly rmqClient: ClientProxy) {

  }

  async newPost(data) {
    const post = new Post(data)
    return await this.postRepository.save(post)
  }

  async editPost(data) {
    const post = await this.postRepository.findOne(data.id)
    if (post) {
      const updatePost = {...data}
      return await this.postRepository.update(data.id, updatePost)
    }
    return this.UNKNOWN_ERROR
  }

  async deletePost(id: number) {
    return await this.postRepository.delete(id)
  }

  async getPost(id: number) {
    return await this.postRepository.findOne({
      where: {id: id},
      relations: ['likes', 'comment']
    });
  }

  async getPosts() {
    return await this.postRepository.find({
      relations: ['likes', 'comment']
    })
  }

  async addComment(data) {
    const comment = new Comment(data)
    return this.commentRepository.save(comment)
  }

  async deleteComment(id: number) {
    return this.commentRepository.delete(id)
  }

  async editComment(data, id: number) {
    const comment = await this.commentRepository.findOne(id)
    if (comment) {
      const updateComment = {...data}
      return await this.commentRepository.update(id, updateComment)
    }
    return this.UNKNOWN_ERROR
  }

  async likePost(postId: number, userId: number) {
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

  async likeComment(commentId: number, userId: number) {
    const likedComment = await this.likeCommentRepository.findOne(commentId)
    if (likedComment) {
      const liked = await this.likeCommentRepository.findOne({
        where: {
          commentId: commentId,
          userId: userId,
        }
      })
      if (liked) {
        return this.likeCommentRepository.delete(liked.id)
      } else {
        const likeComment = new LikeComment({commentId, userId})
        return await this.likeCommentRepository.save(likeComment)
      }
    }
    return this.UNKNOWN_ERROR
  }

  async getLikeListPost(id: number) {
    const like = await getRepository(Like)
      .createQueryBuilder('like')
      .where('like.postId=:id', {id: id})
      .getCount()
    return like
  }

  async getLikeListComment(id: number) {
    return null
  }
}