import {Entity, Column, OneToMany} from 'typeorm';
import {BaseEntity} from "./base.entity";
import {Avatar} from "../../../../users-service/src/common/entities/avatar.entity";


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

  // @OneToMany(() => Avatar, avatar => avatar.user)
  // like: Avatar[];
}