import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { dataSourceOptions } from './database.datasource';

const options: DataSourceOptions & SeederOptions = {
  ...dataSourceOptions,

  seeds: ['src/**/**/*seeder.{ts,js}'],
  factories: ['src/**/**/*factory.{ts,js}'],
};

export const dataSource = new DataSource(options);
