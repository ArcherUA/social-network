import {Entity, Column, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import {BaseEntity} from "./base.entity";

import {Like} from './like.entity'

@Entity({name: 'posts'})
export class Post extends BaseEntity<Post> {

  @Column()
  content: string;

  @Column({default: 0})
  like: number;

  @Column({default: 0})
  commentList: number;

  @Column()
  authorId: number;

  @OneToMany(type => Like, likes => likes.postId)
  likes: Like[]
}