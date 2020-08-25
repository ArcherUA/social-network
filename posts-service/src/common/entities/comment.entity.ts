import {Entity, Column, OneToMany, JoinColumn, ManyToOne} from 'typeorm';
import {BaseEntity} from "./base.entity";

import {LikeComment, Post} from './';

@Entity({name: 'comment'})
export class Comment extends BaseEntity<Comment> {

  @Column()
  content: string;

  @Column()
  authorId: number;

  @Column({nullable: true, default: null})
  parentId: number;

  @ManyToOne(type => Post, post => post.comment)
  post: Post;

  @ManyToOne(type => Comment, parent => parent.childs)
  @JoinColumn({name: 'parentId'})
  parent: Comment;

  @OneToMany(type => Comment, childs => childs.parent)
  childs: Comment[];

  @OneToMany(type => LikeComment, likes => likes.comment)
  likes: LikeComment[];
}