import {Entity, JoinColumn, Column, ManyToOne} from 'typeorm';
import {BaseEntity} from "./base.entity";

import {Comment} from "./";

@Entity({name: 'likes'})
export class LikeComment extends BaseEntity<LikeComment> {

  @Column()
  commentId: string;

  @Column()
  userId: string;

  @ManyToOne(type => Comment, post => post.likes)
  @JoinColumn({name: 'commentId'})
  comment: Comment;
}