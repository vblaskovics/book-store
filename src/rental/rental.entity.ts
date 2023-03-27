import { BookEntity } from '../book/book.entity';
import { CustomerEntity } from '../customer/customer.entity';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RentalEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => BookEntity)
  @JoinColumn()
  book: BookEntity;

  @OneToOne(() => CustomerEntity)
  @JoinColumn()
  customer: CustomerEntity;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}
