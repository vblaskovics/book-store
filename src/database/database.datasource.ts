import { BookEntity } from '../book/book.entity';
import { CustomerEntity } from '../customer/customer.entity';
import { RentalEntity } from '../rental/rental.entity';
import { DataSource } from 'typeorm';

// used with typeorm cli
export default new DataSource({
  type: 'mysql',
  host: process.env['DATABASE_HOST'],
  port: +process.env['DATABASE_PORT'],
  username: process.env['DATABASE_USERNAME'],
  password: process.env['DATABASE_PASSWORD'],
  database: process.env['DATABASE'],
  entities: [BookEntity, CustomerEntity, RentalEntity],
});
