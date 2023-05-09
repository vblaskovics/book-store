import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { RentalService } from './rental.service';
import { HasRoles, JwtAuthGuard, Role, RolesGuard } from 'src/auth';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetRentalDTO, RentBookDto } from './rental.dto';

@Controller({
  version: '1',
  path: 'rentals',
})
@HasRoles(Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('rentals')
@ApiBearerAuth()
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Get('book/:bookId')
  async getActiveRentals(@Param('bookId') bookId: string) {
    return this.rentalService.getRentalsByBookId(bookId);
  }

  @Post('/book/:bookId')
  async rentBook(@Param('bookId') bookId: string, @Body() body: RentBookDto) {
    // return dummy rental
    return {
      id: '1',
      bookId: '1',
      book: {
        id: '1',
        author: 'J.K. Rowling',
      },
      customerId: '1',
      customer: {
        id: '1',
        firstName: 'John',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
    };
  }
}
