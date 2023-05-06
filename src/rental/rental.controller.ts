import { Controller, Get, Param, Query } from '@nestjs/common';
import { RentalService } from './rental.service';

@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Get('active/book/:bookId')
  async getActiveRentals(@Param('bookId') bookId: string) {
    return this.rentalService.getRentalsByBookId(bookId);
  }
}
