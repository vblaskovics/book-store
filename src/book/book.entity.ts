import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column('date')
  releaseDate: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}
