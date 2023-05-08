import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalEntity } from './rental.entity';
import { RentalController } from './rental.controller';
import { RentalService } from './rental.service';
import { RentalRepository } from './rental.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RentalEntity])],
  controllers: [RentalController],
  providers: [RentalService, RentalRepository],
  exports: [RentalService],
})
export class RentalModule {}
