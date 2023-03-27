import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookEntity } from './book.entity';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [BookController],
  providers: [BookService, BookRepository],
  exports: [BookService],
})
export class BookModule {}
