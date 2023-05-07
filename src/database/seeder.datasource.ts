import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { dataSourceOptions } from './database.datasource';

const options: DataSourceOptions & SeederOptions = {
  ...dataSourceOptions,

  seeds: ['src/database/seeds/**/*{.ts,.js}'],
  factories: ['src/database/factories/**/*{.ts,.js}'],
};

export const dataSource = new DataSource(options);
