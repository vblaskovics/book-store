import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class GetBookDTO {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  releaseDate: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}

export class UpdateBookDTO {
  @ApiProperty({ format: 'uuid' })
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  author: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  releaseDate: Date;
}

export class CreateBookDTO {
  @ApiProperty()
  @IsString()
  author: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  releaseDate: Date;
}
