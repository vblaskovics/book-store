import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { BookEntity } from '../../book/book.entity';

export default class BookSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(BookEntity);

    await repository.insert([
      {
        author: 'J.K. Rowling',
        releaseDate: '1997-06-26',
        title: "Harry Potter and the Philosopher's Stone",
      },
    ]);

    const factory = factoryManager.get(BookEntity);
    await factory.save();
    // await factory.saveMany(5);
  }
}
