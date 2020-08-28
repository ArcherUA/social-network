import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './users.entity';

@Entity({ name: 'avatar' })
export class Avatar extends BaseEntity<Avatar> {
  @Column()
  name: string;

  @Column()
  description: number;

  @Column()
  url: string;

  @Column()
  userId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;
}
