import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class GetCustomerDTO {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  birthDate: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}

export class UpdateCustomerDTO {
  @ApiProperty({ format: 'uuid' })
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  birthDate: Date;
}

export class CreateCustomerDTO {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  birthDate: Date;
}
