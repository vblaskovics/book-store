import { BookEntity } from '../book/book.entity';
import { CustomerEntity } from '../customer/customer.entity';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class RentalEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => BookEntity, (book: BookEntity) => book.rentals)
  book: BookEntity;

  @RelationId((rental: RentalEntity) => rental.book)
  bookId: string;

  @ManyToOne(
    () => CustomerEntity,
    (customer: CustomerEntity) => customer.rentals,
  )
  customer: CustomerEntity;

  @RelationId((rental: RentalEntity) => rental.customer)
  customerId: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}
