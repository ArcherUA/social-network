import {Entity, Column, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import {BaseEntity} from "./base.entity";

import {Like} from './like.entity'

@Entity({name: 'posts'})
export class Post extends BaseEntity<Post> {

  @Column()
  content: string;

  @Column({default: 0})
  likes: number;

  @Column({default: 0})
  commentList: number;

  @Column()
  authorId: number;

  @OneToMany(type => Like, like => like.postId)
  like: Like[]
}