import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Tag } from './tag.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @JoinTable()
  @ManyToMany(() => Tag, (tag: Tag) => tag.courses)
  tags: Tag[];
}
