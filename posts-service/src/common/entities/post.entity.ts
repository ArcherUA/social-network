import {Entity, Column} from 'typeorm';
import {BaseEntity} from "./base.entity";


@Entity({name: 'users'})
export class Post extends BaseEntity<Post> {

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likes: number;

  @Column()
  commentList: number;

  @Column()
  authorId: number;

}