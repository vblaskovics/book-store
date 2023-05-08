import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { RentalEntity } from './rental.entity';

export default class BookSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(RentalEntity);
    const customerRepository = dataSource.getRepository('CustomerEntity');
    const bookRepository = dataSource.getRepository('BookEntity');

    const customer = await customerRepository.findOne({
      where: {
        id: '1',
      },
    });

    const book = await bookRepository.findOne({
      where: {
        id: '1',
      },
    });

    if (!customer || !book) {
      throw new Error('Customer or book not found');
    }

    await repository.insert([
      {
        id: '1',
        book,
        customer,
      },
    ]);
  }
}
