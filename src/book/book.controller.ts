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
import { CreateBookDTO, GetBookDTO, UpdateBookDTO } from './book.dto';
import { BookService } from './book.service';

@Controller({
  version: '1',
  path: 'books',
})
@HasRoles(Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('books')
@ApiBearerAuth()
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  @ApiOkResponse({ type: GetBookDTO, isArray: true })
  getBooks(): Promise<GetBookDTO[]> {
    return this.bookService.listBooks();
  }

  @Get(':id')
  @ApiOkResponse({ type: GetBookDTO })
  async getBookById(@Param('id') id: string): Promise<GetBookDTO> {
    const book = this.bookService.getBookById(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  @Get(':id/rentals')
  @ApiOkResponse({ type: GetBookDTO })
  async getRentalsByBookId(@Param('id') bookId: string): Promise<GetBookDTO> {
    const book = this.bookService.getBookById(bookId);
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    return book;
  }

  @Post()
  @ApiOkResponse({ type: GetBookDTO })
  createBook(@Body() book: CreateBookDTO): Promise<GetBookDTO> {
    return this.bookService.createBook(book);
  }

  @Patch(':id')
  @ApiOkResponse({ type: GetBookDTO })
  updateBook(
    @Param('id') id: string,
    @Body() book: UpdateBookDTO,
  ): Promise<GetBookDTO> {
    if (id !== book.id) {
      throw new BadRequestException('Id mismatch');
    }

    return this.bookService.createBook(book);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): Promise<void> {
    return this.bookService.deleteBook(id);
  }
}
