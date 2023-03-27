import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly repository: Repository<CustomerEntity>,
  ) {}

  getCustomers(): Promise<CustomerEntity[]> {
    return this.repository.find();
  }

  getCustomerById(id: string): Promise<CustomerEntity> {
    return this.repository.findOneBy({ id });
  }

  createCustomer(
    book: Omit<CustomerEntity, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<CustomerEntity> {
    return this.repository.save(book);
  }

  updateCustomer(
    book: Omit<CustomerEntity, 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<CustomerEntity> {
    return this.repository.save(book);
  }

  async deleteCustomer(id: string): Promise<void> {
    await this.repository.softDelete({ id });
  }
}
