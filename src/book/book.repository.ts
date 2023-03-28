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
    return this.repository.findOne({
      select: ['id', 'author', 'releaseDate'],
      where: { id },
    });
  }

  async createBook(
    book: Omit<
      BookEntity,
      'id' | 'createdAt' | 'rentals' | 'updatedAt' | 'deletedAt'
    >,
  ): Promise<BookEntity> {
    const { id } = await this.repository.save(book);
    return this.getBookById(id);
  }

  async updateBook(
    book: Omit<BookEntity, 'rentals' | 'createdAt' | 'updatedAt' | 'deletedAt'>,
  ): Promise<BookEntity> {
    const { id } = await this.repository.save(book);
    return this.getBookById(id);
  }

  async deleteBook(id: string): Promise<void> {
    await this.repository.softDelete({ id });
  }
}
