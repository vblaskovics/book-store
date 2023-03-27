import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';

@Injectable()
export class BookRepository {
  constructor(
    @InjectRepository(BookEntity)
    private readonly repository: Repository<BookEntity>,
  ) {}

  getBooks(): Promise<BookEntity[]> {
    return this.repository.find();
  }

  getBookById(id: string): Promise<BookEntity> {
    return this.repository.findOneBy({ id });
  }

  createBook(
    book: Omit<BookEntity, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<BookEntity> {
    return this.repository.save(book);
  }

  updateBook(
    book: Omit<BookEntity, 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<BookEntity> {
    return this.repository.save(book);
  }

  async deleteBook(id: string): Promise<void> {
    await this.repository.softDelete({ id });
  }
}
