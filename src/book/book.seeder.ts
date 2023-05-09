import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { BookEntity } from './book.entity';

export default class BookSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(BookEntity);

    await repository.insert([
      {
        id: '1',
        author: 'J.K. Rowling',
        releaseDate: '1997-06-26',
        title: "Harry Potter and the Philosopher's Stone",
      },
      {
        id: '2',
        author: 'J.K. Rowling',
        releaseDate: '1998-07-02',
        title: 'Harry Potter and the Chamber of Secrets',
      },
    ]);

    const factory = factoryManager.get(BookEntity);
    await factory.saveMany(5);
  }
}
