import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';
import { dataSourceOptions } from '../src/database/database.datasource';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';

const testDbConnection: DataSourceOptions = {
  ...dataSourceOptions,
  // rewrite props if needed for test
};

@Module({
  imports: [TypeOrmModule.forRoot(testDbConnection)],
  controllers: [AppController],
  providers: [AppService],
})
export class TestAppModule {}
