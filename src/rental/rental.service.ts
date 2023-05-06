import { Injectable } from '@nestjs/common';
import { GetRentalDTO } from './rental.dto';
import { RentalRepository } from './rental.repository';

@Injectable()
export class RentalService {
  constructor(private rentalRepository: RentalRepository) {}
  async getRentalsByBookId(bookId: string): Promise<GetRentalDTO[]> {
    return this.rentalRepository.getRentalsByBookId(bookId);
  }
}
