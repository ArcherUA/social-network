import {Entity, Column, OneToMany} from 'typeorm';
import {BaseEntity} from "./base.entity";
import {Avatar} from "./avatar.entity";


@Entity({name: 'users'})
export class User extends BaseEntity<User> {

  @Column()
  fullName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  dateOfBirth: string;

  @Column()
  adres: string;

  @Column({nullable: true})
  avatarId: number;

  @OneToMany(() => Avatar, avatar => avatar.user)
  avatar: Avatar[];
}