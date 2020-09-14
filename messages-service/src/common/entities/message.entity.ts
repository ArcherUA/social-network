import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'message' })
export class Message extends BaseEntity<Message> {
  @Column()
  content: string;

  @Column()
  authorId: number;

  @Column()
  recipientId: number;
}
