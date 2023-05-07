import { runSeeders } from 'typeorm-extension';
import { dataSource } from './seeder.datasource';

(async () => {
  await dataSource.initialize();
  runSeeders(dataSource, {
    seeds: ['src/database/seeds/**/*{.ts,.js}'],
    factories: ['src/database/factories/**/*{.ts,.js}'],
  });
})();
