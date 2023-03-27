import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalEntity } from './rental.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RentalEntity])],
})
export class RentalModule {}
