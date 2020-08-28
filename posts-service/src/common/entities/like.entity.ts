import { Entity, JoinColumn, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from "./base.entity";

import { Post } from "./post.entity";

@Entity({ name: 'likes' })
export class Like extends BaseEntity<Like> {

  @Column()
  postId: number;

  @Column()
  userId: number;

  @ManyToOne(type => Post, post => post.likes)
  @JoinColumn({ name: 'postId' })
  post: Post;
}
