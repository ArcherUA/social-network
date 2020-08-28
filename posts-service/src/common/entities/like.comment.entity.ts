import { Entity, JoinColumn, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from "./base.entity";

import { Comment } from "./";

@Entity({ name: 'LikeComment' })
export class LikeComment extends BaseEntity<LikeComment> {

  @Column()
  commentId: number;

  @Column()
  userId: number;

  @ManyToOne(type => Comment, comment => comment.likes)
  @JoinColumn({ name: 'commentId' })
  comment: Comment;
}
