import { Injectable } from '@nestjs/common';
import type {
  CreateCustomerDTO,
  GetCustomerDTO,
  UpdateCustomerDTO,
} from './customer.dto';
import { CustomerRepository } from './customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly bookRepository: CustomerRepository) {}

  async listCustomers(): Promise<GetCustomerDTO[]> {
    return this.bookRepository.getCustomers();
  }

  async getCustomerById(id: string): Promise<GetCustomerDTO> {
    return this.bookRepository.getCustomerById(id);
  }

  async createCustomer(book: CreateCustomerDTO): Promise<GetCustomerDTO> {
    return this.bookRepository.createCustomer(book);
  }

  async updateCustomer(book: UpdateCustomerDTO): Promise<GetCustomerDTO> {
    return this.bookRepository.updateCustomer(book);
  }

  async deleteCustomer(id: string): Promise<void> {
    return this.bookRepository.deleteCustomer(id);
  }
}
