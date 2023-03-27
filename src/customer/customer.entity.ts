import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CustomerEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column('date')
  birthDate: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}
