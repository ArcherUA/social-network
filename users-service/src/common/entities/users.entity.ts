import {Entity, Column, OneToMany} from 'typeorm';
import {BaseEntity} from "./base.entity";
import {Avatar} from "./avatar.entity";


@Entity({name: 'users'})
export class User extends BaseEntity<User> {

  @Column()
  fullName: string;

  @Column()
  password: number;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  dateOfBirth: string;

  @Column()
  adress: string;

  @Column()
  avatarId: string;

  @OneToMany(() => Avatar, avatar => avatar.user)
  avatar: Avatar;
}