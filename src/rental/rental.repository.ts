import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentalEntity } from './rental.entity';

@Injectable()
export class RentalRepository {
  constructor(
    @InjectRepository(RentalEntity)
    private readonly repository: Repository<RentalEntity>,
  ) {}

  async getRentalsByBookId(bookId: string): Promise<RentalEntity[]> {
    const rentals = await this.repository.find({ where: { bookId } });
    return rentals;
  }
}
