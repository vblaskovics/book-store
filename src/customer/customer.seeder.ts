import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { CustomerEntity } from './customer.entity';

export default class BookSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(CustomerEntity);

    await repository.insert([
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        birthDate: '1990-01-01',
      },
    ]);
  }
}
