import { Test, TestingModule } from '@nestjs/testing';
import { RentalService } from './rental.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GetRentalDTO } from './rental.dto';
import { RentalEntity } from './rental.entity';
import { RentalRepository } from './rental.repository';

const mockRentals: Array<GetRentalDTO> = [
  {
    id: '1',
    bookId: '1',
    customerId: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  },
];

let mockedRepo = {
  find: jest.fn((id: string) => Promise.resolve(mockRentals)),
};

describe('RentalService', () => {
  let service: RentalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RentalService,
        RentalRepository,
        {
          provide: getRepositoryToken(RentalEntity),
          useValue: mockedRepo,
        },
      ],
    }).compile();

    service = module.get<RentalService>(RentalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return rentals by book id', async () => {
    const bookId = '1';
    await service.getRentalsByBookId(bookId);
    expect(mockedRepo.find).toBeCalledTimes(1);
  });
});
