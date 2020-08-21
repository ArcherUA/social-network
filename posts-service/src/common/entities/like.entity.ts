import {Entity, Column, ManyToOne} from 'typeorm';
import {BaseEntity} from "./base.entity";

import {Post} from "./post.entity";

@Entity({name: 'likes'})
export class Like extends BaseEntity<Like> {

  @Column()
  postId: string;

  @Column()
  userId: string;

  @ManyToOne(type => Post, post => post.likes)
  post: Post[];
}