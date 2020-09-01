import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Avatar } from './avatar.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'users' })
export class User extends BaseEntity<User> {
  @Column()
  fullName: string;

  @Exclude()
  @Column()
  password: string;

  @Exclude()
  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  dateOfBirth: string;

  @Column()
  adres: string;

  @Column({ nullable: true })
  avatarId: string;

  @OneToMany(
    () => Avatar,
    avatar => avatar.user,
  )
  avatar: Avatar[];
}
