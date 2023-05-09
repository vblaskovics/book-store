import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class GetRentalDTO {
  id!: string;
  bookId: string;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export class RentBookDto {
  customerId: string;
}
