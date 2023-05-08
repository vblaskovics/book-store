import { setSeederFactory } from 'typeorm-extension';
import { CustomerEntity } from './customer.entity';

export default setSeederFactory(CustomerEntity, (faker) => {
  return {};
});
