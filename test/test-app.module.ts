import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { AuthModule } from '../src/auth';
import { dataSourceOptions } from '../src/database/database.datasource';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

const testDbConnection: DataSourceOptions = {
  ...dataSourceOptions,
  // overwrite props if needed for test
};

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(testDbConnection)],
  controllers: [AppController],
  providers: [AppService],
})
export class TestAppModule {}
