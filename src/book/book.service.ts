import { Injectable } from '@nestjs/common';
import type { CreateBookDTO, GetBookDTO, UpdateBookDTO } from './book.dto';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async listBooks(): Promise<GetBookDTO[]> {
    return this.bookRepository.getBooks();
  }

  async getBookById(id: string): Promise<GetBookDTO> {
    return this.bookRepository.getBookById(id);
  }

  async createBook(book: CreateBookDTO): Promise<GetBookDTO> {
    return this.bookRepository.createBook(book);
  }

  async updateBook(book: UpdateBookDTO): Promise<GetBookDTO> {
    return this.bookRepository.updateBook(book);
  }

  async deleteBook(id: string): Promise<void> {
    return this.bookRepository.deleteBook(id);
  }
}
