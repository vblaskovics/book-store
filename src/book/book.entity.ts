import { RentalEntity } from '../rental/rental.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
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

  @OneToMany(() => RentalEntity, (rental: RentalEntity) => rental.book)
  rentals: RentalEntity[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}
