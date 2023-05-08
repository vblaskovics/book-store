import { setSeederFactory } from 'typeorm-extension';
import { RentalEntity } from './rental.entity';

export default setSeederFactory(RentalEntity, (faker) => {
  return {};
});
