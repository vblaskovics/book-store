import { setSeederFactory } from 'typeorm-extension';
import { BookEntity } from './book.entity';

export default setSeederFactory(BookEntity, (faker) => {
  const book = new BookEntity();
  book.author = faker.name.fullName();
  book.releaseDate = faker.date.past();
  book.title = faker.lorem.words(3);
  return book;
});
