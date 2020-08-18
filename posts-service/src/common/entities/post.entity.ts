import {Entity, Column} from 'typeorm';
import {BaseEntity} from "./base.entity";


@Entity({name: 'users'})
export class User extends BaseEntity<User> {

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likeList: string;

  @Column()
  commentList: string;

  @Column()
  author: string;

}