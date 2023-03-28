import { BookEntity } from '../book/book.entity';
import { CustomerEntity } from '../customer/customer.entity';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RentalEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToMany(() => BookEntity, (book: BookEntity) => book.rentals)
  book: BookEntity;

  @OneToMany(
    () => CustomerEntity,
    (customer: CustomerEntity) => customer.rentals,
  )
  customer: CustomerEntity;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}
