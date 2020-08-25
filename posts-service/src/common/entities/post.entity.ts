import {Entity, Column, OneToMany} from 'typeorm';
import {BaseEntity} from "./base.entity";

import {Like, Comment} from './index'

@Entity({name: 'posts'})
export class Post extends BaseEntity<Post> {

  @Column()
  content: string;

  @Column()
  authorId: number;

  @OneToMany(type => Comment, comment => comment.post)
  comment: Comment[];

  @OneToMany(type => Like, likes => likes.post)
  likes: Like[];
}