import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { HasRoles, JwtAuthGuard, Role, RolesGuard } from '../auth';
import {
  CreateCustomerDTO,
  GetCustomerDTO,
  UpdateCustomerDTO,
} from './customer.dto';
import { CustomerService } from './customer.service';

@Controller({
  version: '1',
  path: 'customers',
})
@HasRoles(Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('customers')
@ApiBearerAuth()
export class CustomerController {
  constructor(private readonly bookService: CustomerService) {}

  @Get()
  @ApiOkResponse({ type: GetCustomerDTO, isArray: true })
  getCustomers(): Promise<GetCustomerDTO[]> {
    return this.bookService.listCustomers();
  }

  @Get(':id')
  @ApiOkResponse({ type: GetCustomerDTO })
  async getCustomerById(@Param('id') id: string): Promise<GetCustomerDTO> {
    const book = this.bookService.getCustomerById(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  @Post()
  @ApiOkResponse({ type: GetCustomerDTO })
  createCustomer(@Body() book: CreateCustomerDTO): Promise<GetCustomerDTO> {
    return this.bookService.createCustomer(book);
  }

  @Patch(':id')
  @ApiOkResponse({ type: GetCustomerDTO })
  updateCustomer(
    @Param('id') id: string,
    @Body() book: UpdateCustomerDTO,
  ): Promise<GetCustomerDTO> {
    if (id !== book.id) {
      throw new BadRequestException('Id mismatch');
    }

    return this.bookService.createCustomer(book);
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: string): Promise<void> {
    return this.bookService.deleteCustomer(id);
  }
}
