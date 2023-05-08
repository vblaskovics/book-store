import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { RentalService } from './rental.service';
import { HasRoles, JwtAuthGuard, Role, RolesGuard } from 'src/auth';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetRentalDTO } from './rental.dto';

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

  @Get('active/book/:bookId')
  async getActiveRentals(@Param('bookId') bookId: string) {
    return this.rentalService.getRentalsByBookId(bookId);
  }
}
