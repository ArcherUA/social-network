import {Entity, Column, OneToMany} from 'typeorm';
import {BaseEntity} from "./base.entity";


@Entity({name: 'users'})
export class User extends BaseEntity<User> {

  @Column()
  head: string;

  @Column()
  text: string;

  @Column()
  likeList: string;

  @Column()
  commentList: string;

  @Column()
  author: string;

}