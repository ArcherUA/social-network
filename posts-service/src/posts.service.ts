import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';

import { Comment, Like, LikeComment, Post } from './common/entities';
import { PostsCommand } from './common/enums/posts.command.enums';

@Injectable()
export class PostsService {
  private readonly UNKNOWN_ERROR = 'Unknown error';

  public constructor(
    @InjectRepository(Post)
    protected readonly postRepository: Repository<Post>,
    @InjectRepository(Like)
    protected readonly likeRepository: Repository<Like>,
    @InjectRepository(Comment)
    protected readonly commentRepository: Repository<Comment>,
    @InjectRepository(LikeComment)
    protected readonly likeCommentRepository: Repository<LikeComment>,
    @Inject('POSTS_SERVICE') private readonly rmqClient: ClientProxy,
    @Inject('USERS_SERVICE') private readonly userRmqClient: ClientProxy,
  ) {}

  async newPost(data) {
    const post = new Post(data);

    return await this.postRepository.save(post);
  }

  async editPost(data, postId) {
    const post = await this.postRepository.findOne(postId);

    if (post) {
      const updatePost = { ...data };

      return await this.postRepository.update(postId, updatePost);
    }

    return this.UNKNOWN_ERROR;
  }

  async deletePost(id: number) {
    return await this.postRepository.delete(id);
  }

  async getPost(id: number) {
    const post = await this.postRepository.findOne({
      where: { id: id },
      relations: ['likes', 'comment'],
    });
    const ids = {};

    ids[post.authorId] = post.authorId;
    await post.likes.forEach(
      (element) => (ids[element.userId] = element.userId),
    );
    await post.comment.forEach(
      (element) => (ids[element.authorId] = element.authorId),
    );

    const users = await this.userRmqClient.send(
      { cmd: PostsCommand.SEND_ARRAY_USER_ID },
      Object.values(ids),
    );
    // console.log(post)

    // return users;
    return { users: users, post: post };
  }

  async getPosts() {
    return await this.postRepository.find({
      relations: ['likes', 'comment'],
    });
  }

  async addComment(data) {
    const post = await this.postRepository.findOne(data.post);

    if (post) {
      const comment = new Comment(data);

      return this.commentRepository.save(comment);
    }

    return this.UNKNOWN_ERROR;
  }

  async deleteComment(id: number) {
    return this.commentRepository.delete(id);
  }

  async editComment(data, id: number) {
    const comment = await this.commentRepository.findOne(id);

    if (comment) {
      const updateComment = { ...data };

      return await this.commentRepository.update(id, updateComment);
    }

    return this.UNKNOWN_ERROR;
  }

  async likePost(postId: number, userId: number) {
    const likedPost = await this.postRepository.findOne(postId);

    if (likedPost) {
      const liked = await this.likeRepository.findOne({
        where: {
          postId: postId,
          userId: userId,
        },
      });

      if (liked) {
        return this.likeRepository.delete(liked.id);
      }
      const like = new Like({ postId, userId });

      return this.likeRepository.save(like);
    }

    return this.UNKNOWN_ERROR;
  }

  async likeComment(commentId: number, userId: number) {
    const likedComment = this.commentRepository.findOne(commentId);

    if (likedComment) {
      const liked = await this.likeCommentRepository.findOne({
        where: {
          commentId: commentId,
          userId: userId,
        },
      });

      if (liked) {
        return this.likeCommentRepository.delete(liked.id);
      }
      const likeComment = new LikeComment({ commentId, userId });

      return await this.likeCommentRepository.save(likeComment);
    }

    return this.UNKNOWN_ERROR;
  }

  async getLikeListPost(id: number) {
    const like = await getRepository(Like)
      .createQueryBuilder('like')
      .where('like.postId=:id', { id: id })
      .getCount();

    return like;
  }

  async getLikeListComment(id: number) {
    const like = await getRepository(LikeComment)
      .createQueryBuilder('like')
      .where('like.commentId=:id', { id: id })
      .getCount();

    return like;
  }
}
